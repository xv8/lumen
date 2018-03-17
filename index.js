#!/usr/bin/env node
global.require = require
process.env.NODE_PATH = process.env.NODE_PATH + require("path").delimiter + __dirname
require("module").Module._initPaths();
require("./runtime.js");
require("./macros.js");
dax = require("./main.js")
module.exports = dax
if (require.main === module)
  return dax.main();
