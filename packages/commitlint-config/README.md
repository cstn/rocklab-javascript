# Rocklab Commit Style Guide

_Commit rules for JavaScript projects_

> Commitlint [shareable configs](https://commitlint.js.org/#/reference-configuration?id=shareable-configuration)

## Requirements

Install `commitlint` and `husky`

```shell script
npm install --save-dev @commitlint/cli
npm install husky --save-dev
npx husky install
```

## Installation

```shell script
npm install --save-dev @rocklab/commitlint-config
```

```shell script
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

## Usage

_commitlint.config.js_

```js
// commitlint.config.js
module.exports = {
  extends: ['@rocklab'],
};
```
