# Rocklab TypeScript Style Guide

_ESLint rules for TypeScript projects_

> ESLint [shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html)

## Requirements

```shell script
npm install --save-dev eslint babel-eslint prettier-eslint-cli
```

## Installation

```shell script
npm install --save-dev @rocklab/eslint-config-typescript
```

## Usage

_.eslintrc_

React.js projects:

```metadata json
{
  "extends": "@rocklab/eslint-config-typescript",
  "rules": {
    // Add your rules
  }
}
```

Node.js projects:

```metadata json
{
  "extends": "@rocklab/eslint-config-typescript/base",
  "rules": {
    // Add your rules
  }
}
```
