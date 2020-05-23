const EventEmiter = require("events");
const os = require("os");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const { colors } = require("../js/options.js");

module.exports = class Finder extends EventEmiter {
  constructor(dir = os.homedir(), deep = 0, exts = [], skip = "") {
    super();
    this.dir = dir;
    this.deep = deep;
    this.exts = exts;
    this.skip = skip;
    this.files = [];
    this.processing_timer;

    this.once("started", () => {
      console.log("Started!!!");
      this.parse();
    });

    this.setTimer();

    this.on("file", (file_path) => {
      console.log("File_path: ", file_path);
      this.setTimer();
    });

    this.on("processing", (files) => {
      console.log("Processing! Files: ", files);
    });

    this.once("finish", (files) => {
      console.log("Finish! Files: ", files);
      clearTimeout(this.processing_timer);
      this.renderFiles(files);
    });

    this.emit("started");
  }

  parse() {
    console.log("Parsing...");

    this.files = this.getFiles(this.dir);

    this.emit("finish", this.files);
  }

  getFiles(dir) {
    return fs.readdirSync(dir).reduce((acc, file) => {
      const directory = path.join(dir, "/", file);

      if (fs.statSync(directory).isDirectory()) {
        if (this.deep > 0) {
          this.deep--;
          acc.push(...this.getFiles(directory));
        }
      } else {
        const correct_file = this.getCorrectFile(file);

        if (correct_file) {
          acc.push(correct_file);
          this.emit("file", path.join(__dirname, directory));
        }
      }

      return acc;
    }, []);
  }

  getCorrectFile(file) {
    const file_extension = path.extname(file);
    const file_name = path.basename(file, file_extension);

    if (this.exts.includes(file_extension) && !this.skip.includes(file_name)) {
      return file;
    }
  }

  setTimer() {
    if (this.processing_timer) {
      clearTimeout(this.processing_timer);
    }

    this.processing_timer = setTimeout(() => {
      this.emit("processing", this.files);
    }, 2000);
  }

  renderFiles(files) {
    let count_colors = colors.length - 1;

    files.forEach((file) => {
      if (colors.length) {
        console.log(chalk[colors[count_colors]](file));
        count_colors--;

        if (count_colors < 0) {
          count_colors = colors.length - 1;
        }
      } else {
        console.log(chalk.bgBlackBright(file));
      }
    });
  }
};
