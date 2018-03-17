#!/usr/bin/env node
_G = global
_G.require = require
dax = require("./lib.js").create(_G)
module.exports = dax
if (require.main === module)
  return dax.main();
