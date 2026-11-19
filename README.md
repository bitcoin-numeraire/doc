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

## Deployment

Deployment happens automatically thanks to Github Actions.

## Contributing

We welcome contributions to improve this documentation. Please see the CONTRIBUTING.md file for guidelines on how to contribute.

## License

The documentation is licensed under the [Creative Commons Attribution 4.0 International License (CC BY 4.0)](LICENSE).
