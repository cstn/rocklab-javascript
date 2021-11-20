# Rocklab Style Guide

_Code conventions for JavaScript projects_

## Style guides

1. [JavaScript Style Guide](packages/eslint-config-node)
1. [React Style Guide](packages/eslint-config-react)
1. [CSS Style Guide](packages/stylelint-config)

## Examples

Setup your project with [examples](./doc/examples)

## Development

```shell script
git clone https://github.com/cstn/rocklab-javascript.git
yarn install
````

### Commands

Install all dependencies

```shell script
yarn bootstrap
```

Check own code conventions

```shell script
yarn lint
````

Autoformat code

```shell script
yarn prettier
```

Publish a new version

```shell script
yarn lerna:publish
```

Publish a new version manually

```shell script
yarn version
yarn lerna:publish from-package
```
