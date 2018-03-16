#!/usr/bin/env node

// global.require = require
// process.env.NODE_PATH = process.env.NODE_PATH + require("path").delimiter + require("path").join(__dirname, "bin")
// require("module").Module._initPaths();
// lumen = require("./bin/lumen.js")
// module.exports = lumen
// if (require.main === module)
//   return lumen.main();

var _G = {require};
var RT = require("./bin/lib.js").create(_G)
module.exports = RT;
if (require.main === module)
  return RT.main();

