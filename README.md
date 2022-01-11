# Rocklab Style Guide

_Code conventions for JavaScript projects_

## Style guides

1. [TypeScript Style Guide](packages/eslint-config-typescript)
1. [JavaScript Style Guide](packages/eslint-config-javascript)
1. [CSS Style Guide](packages/stylelint-config)
1. [Commit Style Guide](packages/commitlint-config)

## Examples

Setup your project with [examples](./doc/examples)

## Development

```shell script
git clone https://github.com/cstn/rocklab-javascript.git
npm install
````

### Commands

Install all dependencies

```shell script
npm install
```

Check own code conventions

```shell script
npm run lint
````

Autoformat code

```shell script
npm run prettier
```

Publish a new version

```shell script
npm run publish
```

Publish a new version manually

```shell script
npm run version
npm run publish -- from-package
```

Create a release

```shell script
npm run release
```
