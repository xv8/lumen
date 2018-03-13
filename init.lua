#!/usr/bin/env lua
local info = debug.getinfo(1,'S')
local source = ""
if info
then
  source = info.source:gsub("init.lua", ""):gsub("^@", "")
  package.path = package.path .. ";" .. source .. "bin/?.lua";
end
local realRequire = _G.require
local luaRequire = require
_G = _G or _ENV
_G.lumen = loadfile(source .. "bin/lumen.lua")()
_G.require = luaRequire
_G.realRequire = realRequire
return _G.lumen.main()
