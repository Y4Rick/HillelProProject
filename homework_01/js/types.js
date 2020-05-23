const env = require("minimist")(process.env.EXT.split(","));
const types = env._;

module.exports = types;
