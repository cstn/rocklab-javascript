# Rocklab Style Guide

_Code conventions for JavaScript projects_

## Style guides

1. [React Style Guide](packages/eslint-config-react)
1. [CSS Style Guide](packages/stylelint-config)

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
npm run lerna:bootstrap
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
npm run lerna:publish
```

Publish a new version manually

```shell script
npm run lerna:version
npm run lerna:publish -- from-package
```
