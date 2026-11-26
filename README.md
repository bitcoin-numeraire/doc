# Numeraire Documentation

This repository hosts the documentation for the Numeraire project, built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## About

This documentation provides comprehensive guides, API references, and other resources for using and contributing to Numeraire. Contributions are welcome and encouraged!

## Installation

To set up the project locally, install the necessary dependencies:

```
yarn
```

## Local Development

Start the local development server:

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

Generate static content for deployment:

```
yarn build
```

This command generates static content into the `build` directory, which can be served using any static content hosting service.

## Dependency audit

Run `yarn audit` to check direct and transitive dependencies for security advisories.
CI runs this check after installing the lockfile. Package deprecation notices are
informational; the security check fails on advisories.

The Yarn resolutions select patched Tinypool and serialize-javascript versions
outside Docusaurus's dependency ranges, and UUID 11 for SockJS's CommonJS import.
Remove these overrides when the upstream dependency ranges include the fixes.

## Review a built preview

Open the pull request’s **Lint, Prettier and Build** run and download the `numeraire-docs-<sha>` artifact. Its name identifies the checked-out source. Automatic pull request builds use GitHub’s test merge commit. The artifact is available for 14 days.

For a draft on a separate stack, run the preview workflow from a revision that includes it. Set `REVIEW_COMMIT` to the full commit SHA from the draft you want to review. Once the workflow reaches the default branch, use `--ref main`.

```sh
gh workflow run ci.yml --ref ci/downloadable-doc-previews -f commit="$REVIEW_COMMIT"
```

After downloading and extracting the artifact, use the documentation checkout with its dependencies installed to serve that directory. Open the local URL printed by Docusaurus. You can follow deep links and reload individual guides.

```sh
yarn serve --dir /path/to/extracted-preview
```

## Deployment

Pushing a `v*` tag triggers the Release workflow, which builds the documentation image for AMD64 and ARM64 and publishes it to the DigitalOcean Container Registry.

After the build succeeds, update the docs chart in [k8s-infra](https://github.com/bitcoin-numeraire/k8s-infra/tree/main/charts/docs) to the published tag and digest. Merging that infrastructure change deploys the image.

## Contributing

We welcome contributions to improve this documentation. Please see the CONTRIBUTING.md file for guidelines on how to contribute.

## License

The documentation is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](LICENSE).
