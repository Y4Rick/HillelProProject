const fs = require("fs");
const path = require("path");
const { dirDeep, dirPath } = require("./options.js");

const buildPath = path.join(process.cwd(), dirPath);

exports.files = getFiles(buildPath);

function getFiles(dir) {
  dirDeep.deep++;

  return fs.readdirSync(dir).reduce((acc, file) => {
    const checkDir = path.join(dir, "/", file);

    if (fs.statSync(checkDir).isDirectory()) {
      acc.push(...getFiles(checkDir));
    } else {
      acc.push(file);
    }

    return acc;
  }, []);
}
