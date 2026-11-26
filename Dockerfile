# syntax=docker/dockerfile:1

# Stage 1: Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:24.22.3@sha256:9d266751ca3d7fdbe651c878ffd5ad0a42fed49a18c283509267c97f025b7496 AS base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/* && \
    corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus

# Stage 2a: Development mode.
FROM base AS dev
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Expose the port that Docusaurus will run on.
EXPOSE 3000
## Run the development server.
CMD [ -d "node_modules" ] && yarn start --host 0.0.0.0 --poll 1000 || yarn install && yarn start --host 0.0.0.0 --poll 1000

# Stage 2b: Production build mode.
FROM base AS prod
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Copy over the source code.
COPY . /opt/docusaurus/
## Install dependencies with `--immutable` to ensure reproducibility.
RUN yarn install --immutable
## Build the static site.
RUN yarn build

# Stage 3a: Serve with `docusaurus serve` without shipping the build toolchain.
FROM node:24.22.3-bookworm-slim@sha256:dc26ae92c9fb15cf6b1d63e20f0944b2efe0f115b20e00be48fb23fceb061c54 AS serve
RUN apt-get update && \
    apt-get install -y --no-install-recommends ca-certificates && \
    DEBIAN_FRONTEND=noninteractive apt-get upgrade -y && \
    rm -rf /var/lib/apt/lists/* /usr/local/lib/node_modules/npm \
        /usr/local/lib/node_modules/corepack /opt/yarn-* && \
    rm -f /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/corepack \
        /usr/local/bin/yarn /usr/local/bin/yarnpkg
ENV FORCE_COLOR=0
WORKDIR /opt/docusaurus
COPY --from=prod --chown=node:node /opt/docusaurus/package.json ./package.json
COPY --from=prod --chown=node:node /opt/docusaurus/docusaurus.config.ts /opt/docusaurus/website.ts ./
COPY --from=prod --chown=node:node /opt/docusaurus/node_modules ./node_modules
COPY --from=prod --chown=node:node /opt/docusaurus/build ./build
USER node
EXPOSE 3000
CMD ["node", "node_modules/@docusaurus/core/bin/docusaurus.mjs", "serve", "--host", "0.0.0.0", "--no-open"]

# Stage 3b: Serve with Caddy.
FROM caddy:2.11.7-alpine AS caddy
## Copy the Caddyfile.
COPY --from=prod /opt/docusaurus/Caddyfile /etc/caddy/Caddyfile
## Copy the Docusaurus build output.
COPY --from=prod /opt/docusaurus/build /var/docusaurus