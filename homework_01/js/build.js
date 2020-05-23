const { extname } = require("path");
const chalk = require("chalk");

const { files } = require("./files.js");
const { colors } = require("./options.js");

let count = colors.length;

exports.init = () => {
  files.forEach((file) => {
    if (colors.length === 1 && extname(file) === ".mp3") {
      console.log(chalk[colors[0]](file));
    } else if (colors.length > 1) {
      if (count === 0) {
        count = colors.length;
      }
      count--;
      console.log(chalk[colors[count]](file));
    } else {
      console.log(chalk.bgBlackBright(file));
    }
  });
};
