const requirejs = require("requirejs");


requirejs.config({
  baseUrl: "./js",
  paths: {
    day: "day.js",
    myfunctions: "myfunctions.js"
  },
});