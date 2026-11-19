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

## Deployment

Pushing a `v*` tag triggers the Release workflow, which builds the documentation image for AMD64 and ARM64 and publishes it to the DigitalOcean Container Registry.

After the build succeeds, update the docs chart in [k8s-infra](https://github.com/bitcoin-numeraire/k8s-infra/tree/main/charts/docs) to the published tag and digest. Merging that infrastructure change deploys the image.

## Contributing

We welcome contributions to improve this documentation. Please see the CONTRIBUTING.md file for guidelines on how to contribute.

## License

The documentation is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](LICENSE).
