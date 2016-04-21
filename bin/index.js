#!/usr/bin/env node
'use strict'
const path = require('path')
const meow = require('meow')
const tonicExample = require('..')
const cwd = process.cwd()

const examplePath = meow().input[0] || './example.js'

tonicExample({
  rawExamplePath: path.resolve(cwd, examplePath),
  tonicExamplePath: path.resolve(cwd, './tonic-example.js'),
})
