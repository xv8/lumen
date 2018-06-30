#!/usr/bin/env node
_G = {}
_G.require = require
dax = require("../lib.js").create(_G)
dax.main();

