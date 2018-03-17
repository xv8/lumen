if (require.main === module)
  return require("./bin/cli.js")

module.exports = require("./lib.js")
