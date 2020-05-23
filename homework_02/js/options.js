const env = require("minimist")(process.env.EXT.split(","));
const argv = require("minimist")(process.argv.slice(2));

exports.dir = argv.path;
exports.deep = argv.deep;
exports.extensions = env._;
exports.skip = argv.skip;
exports.colors = argv._;
