#!/usr/bin/env node
var lib = require("../lib.js");
_G = {}
_G.require = require
module.filename = require("path").resolve("repl");
module.paths = require("module")._nodeModulePaths(module.filename);
dax = lib.create(_G)
dax.main();

