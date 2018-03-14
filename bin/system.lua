local uv = pcall(function ()
  return require("uv")
end) and require("uv")
local function call_with_file(f, path, mode)
  local h,e = io.open(path, mode)
  if not h then
    error(e)
  end
  local __x = f(h)
  h.close(h)
  return __x
end
function read_file(path)
  return call_with_file(function (f)
    return f.read(f, "*a")
  end, path)
end
_G.read_file = read_file
function write_file(path, data)
  return call_with_file(function (f)
    return f.write(f, data)
  end, path, "w")
end
_G.write_file = write_file
function file_exists63(path)
  local __f = io.open(path)
  local __id = is63(__f)
  local __e
  if __id then
    local __r7 = is63(__f.read(__f, 0)) or 0 == __f.seek(__f, "end")
    __f.close(__f)
    __e = __r7
  else
    __e = __id
  end
  return __e
end
_G.file_exists63 = file_exists63
function directory_exists63(path)
  local __f1 = io.open(path)
  local __id1 = is63(__f1)
  local __e1
  if __id1 then
    local __r9 = not __f1.read(__f1, 0) and not( 0 == __f1.seek(__f1, "end"))
    __f1.close(__f1)
    __e1 = __r9
  else
    __e1 = __id1
  end
  return __e1
end
_G.directory_exists63 = directory_exists63
path_separator = char(_G.package.config, 0)
_G.path_separator = path_separator
function path_join(...)
  local __parts = unstash({...})
  return reduce(function (x, y)
    return x .. path_separator .. y
  end, __parts) or ""
end
_G.path_join = path_join
function get_environment_variable(name)
  return os.getenv(name)
end
_G.get_environment_variable = get_environment_variable
function write(x)
  if uv then
    return uv.write(process.stdout.handle, x)
  else
    return io.write(x)
  end
end
_G.write = write
function exit(code)
  return os.exit(code)
end
_G.exit = exit
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
argv = __e3
_G.argv = argv
function reload(module)
  package.loaded[module] = nil
  return require(module)
end
_G.reload = reload
function run(command)
  local __f2 = io.popen(command)
  local __x2 = __f2.read(__f2, "*all")
  __f2.close(__f2)
  return __x2
end
_G.run = run
return {["read-file"] = read_file, ["write-file"] = write_file, ["file-exists?"] = file_exists63, ["directory-exists?"] = directory_exists63, ["path-separator"] = path_separator, ["path-join"] = path_join, ["get-environment-variable"] = get_environment_variable, write = write, exit = exit, argv = argv, reload = reload, run = run}
