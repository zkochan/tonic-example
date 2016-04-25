<!--@'# ' + package.name-->
# tonic-example
<!--/@-->

[Tonic example](https://tonicdev.com/) generator

<!--@shields.flatSquare('npm', 'travis', 'coveralls')-->
[![NPM version](https://img.shields.io/npm/v/tonic-example.svg?style=flat-square)](https://www.npmjs.com/package/tonic-example)
[![Build status for master](https://img.shields.io/travis/zkochan/tonic-example/master.svg?style=flat-square)](https://travis-ci.org/zkochan/tonic-example)
[![Test coverage for master](https://img.shields.io/coveralls/zkochan/tonic-example/master.svg?style=flat-square)](https://coveralls.io/r/zkochan/tonic-example?branch=master)
<!--/@-->

## Installation

```sh
npm install tonic-example --save-dev
```

## Usage

Create an example file in your module that requires the main file of your module and demonstrates how it works.

Lets suppose you have a `sum` module with this structure.

    +-- sum
      +-- index.js
      +-- example.js
      +-- package.json
      `-- README.md

Your `example.js` can look like this:

```js
const sum = require('.')
sum(1 + 2)
```

This example file can be easily tried out in the console by running `node example.js`. However, a tonic example needs the module required by name. Here comes `tonic-example`! Run `tonic-example example.js` from the root directory of your package and you'll get a `tonic-example.js` file generated with this content:

```js
const sum = require('sum')
sum(1 + 2)
```

Now you can just add the `tonicExampleFilename` property to your `package.json`.

```json
"tonicExampleFilename": "tonic-example.js"
```

After you publish your package next time, you'll have a working example at [tonicdev.com/npm/sum](https://tonicdev.com/npm/sum).

## Generate the example before publish

In order to always have the latest example code on tonicdev, add the example generation code to a prepublish npm script.

```json
{
  "scripts": {
    "prepublish": "tonic-example"
  }
}
```

## Add `tonic-example.js` to `.gitignore`

It is recommended to add `tonic-example.js` to `.gitignore`. It is a generated file and there is no benefit from having it in git.

## Add `tonic-example.js` to your `files` array

If you use the [files](https://docs.npmjs.com/files/package.json#files) property in your `package.json` then don't forget to add `tonic-example.js` to it. Otherwise it won't be published with your module.

<!--@license()-->
## License

[MIT](./LICENSE) © [Zoltan Kochan](http://kochan.io)
<!--/@-->

* * *

<!--@dependencies({ shield: 'flat-square' })-->
## Dependencies [![Dependency status for master](https://img.shields.io/david/zkochan/tonic-example/master.svg?style=flat-square)](https://david-dm.org/zkochan/tonic-example/master)

- [independent](https://github.com/zkochan/independent): Change relative requires to import actual modules
- [meow](https://github.com/sindresorhus/meow): CLI app helper

<!--/@-->

<!--@devDependencies({ shield: 'flat-square' })-->
## Dev Dependencies [![devDependency status for master](https://img.shields.io/david/dev/zkochan/tonic-example/master.svg?style=flat-square)](https://david-dm.org/zkochan/tonic-example/master#info=devDependencies)

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog): Commitizen adapter following the conventional-changelog format.
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-standard](https://github.com/feross/eslint-config-standard): JavaScript Standard Style - ESLint Shareable Config
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise): Enforce best practices for JavaScript promises
- [eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard): ESlint Plugin for the Standard Linter
- [ghooks](https://github.com/gtramontina/ghooks): Simple git hooks
- [istanbul](https://github.com/gotwarlost/istanbul): Yet another JS code coverage tool that computes statement, line, function and branch coverage with module loader hooks to transparently add coverage when running tests. Supports all JS coverage use cases including unit tests, server side functional tests
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [mos](https://github.com/zkochan/mos): A pluggable module that injects content into your markdown files via hidden JavaScript snippets
- [semantic-release](https://github.com/semantic-release/semantic-release): automated semver compliant package publishing
- [validate-commit-msg](https://github.com/kentcdodds/validate-commit-msg): Script to validate a commit message follows the conventional changelog standard

<!--/@-->
