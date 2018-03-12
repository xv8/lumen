  return {
    name = "lumen",
    version = "0.1.0",
    description = "A Lisp for Lua and JavaScript",
    tags = { "lua", "js", "javascript", "compiler", "lisp" },
    license = "BSD-2-Clause",
    author = { name = "Shawn Presser", email = "shawnpresser@gmail.com" },
    homepage = "https://github.com/shawwn/lumen",
    dependencies = {},
    files = {
      "bin/reader.lua",
      "bin/compiler.lua",
      "bin/system.lua",
      "bin/lumen.lua",
      "**.lua",
      "!test*"
    }
  }
  
