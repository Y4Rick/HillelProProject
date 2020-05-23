const { dir, deep, extensions, skip } = require("./js/options.js");

const Finder = require("./app/finder.js");

const MyFinder = new Finder(dir, deep, extensions, skip);

// console.log(MyFinder);
