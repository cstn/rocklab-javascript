# Rocklab JavaScript Style Guide

_ESLint rules for JavaScript projects_

> ESLint [shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html)

## Requirements

```shell script
npm install --save-dev eslint babel-eslint prettier-eslint-cli
```

## Installation

```shell script
npm install --save-dev @rocklab/eslint-config-javascript
```

## Usage

_.eslintrc_

React.js projects:

```metadata json
{
  "extends": "@rocklab/eslint-config-javascript",
  "rules": {
    // Add your rules
  }
}
```

Node.js projects:

```metadata json
{
  "extends": "@rocklab/eslint-config-javscript/base",
  "rules": {
    // Add your rules
  }
}
```
