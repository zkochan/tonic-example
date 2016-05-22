#!/usr/bin/env node
'use strict'
var path = require('path')
var meow = require('meow')
var tonicExample = require('..')
var cwd = process.cwd()

var examplePath = meow().input[0] || './example.js'

tonicExample({
  rawExamplePath: path.resolve(cwd, examplePath),
  tonicExamplePath: path.resolve(cwd, './tonic-example.js'),
})
