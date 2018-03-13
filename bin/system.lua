local uv = pcall(function ()
  return require("uv")
end) and require("uv")
local function call_with_file(f, path, mode)
  local h,e = io.open(path, mode)
  if not h then
    error(e)
  end
  local __x = f(h)
  h:close()
  return __x
end
local function read_file(path)
  return call_with_file(function (f)
    return f:read("*a")
  end, path)
end
local function write_file(path, data)
  return call_with_file(function (f)
    return f:write(data)
  end, path, "w")
end
local function file_exists63(path)
  local __f = io.open(path)
  local __id = is63(__f)
  local __e
  if __id then
    local __r7 = is63(__f:read(0)) or 0 == __f:seek("end")
    __f:close()
    __e = __r7
  else
    __e = __id
  end
  return __e
end
local function directory_exists63(path)
  local __f1 = io.open(path)
  local __id1 = is63(__f1)
  local __e1
  if __id1 then
    local __r9 = not __f1:read(0) and not( 0 == __f1:seek("end"))
    __f1:close()
    __e1 = __r9
  else
    __e1 = __id1
  end
  return __e1
end
local path_separator = char(_G.package.config, 0)
local function path_join(...)
  local __parts = unstash({...})
  return reduce(function (x, y)
    return x .. path_separator .. y
  end, __parts) or ""
end
local function get_environment_variable(name)
  return os.getenv(name)
end
local function write(x)
  if uv then
    return uv.write(process.stdout.handle, x)
  else
    return io.write(x)
  end
end
local function exit(code)
  return os.exit(code)
end
local __id2 = arg
local __e3
if __id2 then
  __e3 = __id2
else
  local __e4
  if args then
    __e4 = cut(args, 1)
  end
  __e3 = __e4
end
local argv = __e3
local function reload(module)
  package.loaded[module] = nil
  return require(module)
end
local function run(command)
  local __f2 = io.popen(command)
  local __x2 = __f2:read("*all")
  __f2:close()
  return __x2
end
local exports = exports or {}
exports.read_file = read_file
exports.write_file = write_file
exports.file_exists63 = file_exists63
exports.directory_exists63 = directory_exists63
exports.path_separator = path_separator
exports.path_join = path_join
exports.get_environment_variable = get_environment_variable
exports.write = write
exports.exit = exit
exports.argv = argv
exports.reload = reload
exports.run = run
return exports
