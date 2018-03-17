#!/usr/bin/env node
_G = global
_G.require = require
dax = require("../lib.js").create(_G)
dax.main();

