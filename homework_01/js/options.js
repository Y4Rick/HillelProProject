const argv = require("minimist")(process.argv.slice(2));

const colors = argv._;
const dirDeep = { deep: argv.deep };
const dirPath = argv.path;

module.exports = {
  colors,
  dirDeep,
  dirPath
};
