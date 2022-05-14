const requirejs = require("requirejs");


requirejs.config({
  baseUrl: "./js",
  paths: {
    day: "day",
    myfunctions: "myfunctions"
  }
});