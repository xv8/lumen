var fs = require("fs");
var child_process = require("child_process");
read_file = function (path) {
  return fs.readFileSync(path, "utf8");
};
_G.read_file = read_file;
write_file = function (path, data) {
  return fs.writeFileSync(path, data, "utf8");
};
_G.write_file = write_file;
file_exists63 = function (path) {
  return fs.existsSync(path, "utf8") && fs.statSync(path).isFile();
};
_G.file_exists63 = file_exists63;
directory_exists63 = function (path) {
  return fs.existsSync(path, "utf8") && fs.statSync(path).isDirectory();
};
_G.directory_exists63 = directory_exists63;
path_separator = require("path").sep;
_G.path_separator = path_separator;
path_join = function () {
  var __parts = unstash(Array.prototype.slice.call(arguments, 0));
  return reduce(function (x, y) {
    return x + path_separator + y;
  }, __parts) || "";
};
_G.path_join = path_join;
get_environment_variable = function (name) {
  return process.env[name];
};
_G.get_environment_variable = get_environment_variable;
write = function (x) {
  var __out = process.stdout;
  return __out.write(x);
};
_G.write = write;
exit = function (code) {
  return process.exit(code);
};
_G.exit = exit;
argv = cut(process.argv, 2);
_G.argv = argv;
reload = function (module) {
  delete require.cache[require.resolve(module)];
  return require(module);
};
_G.reload = reload;
run = function (command) {
  return child_process.execSync(command).toString();
};
_G.run = run;
exports["read-file"] = read_file;
exports["write-file"] = write_file;
exports["file-exists?"] = file_exists63;
exports["directory-exists?"] = directory_exists63;
exports["path-separator"] = path_separator;
exports["path-join"] = path_join;
exports["get-environment-variable"] = get_environment_variable;
exports.write = write;
exports.exit = exit;
exports.argv = argv;
exports.reload = reload;
exports.run = run;
