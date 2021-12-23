//!  110621.1800  GENERATION 2 CURDOC FF

console.log(ff.length);

//!  21921.1621------------Initialize variables

var issue;
var downloadTitle;
var newestYear;
var oldestYear;
let year = 0;
const years = [];

const floralFinance = ff;

c(floralFinance[3].month);
console.table(floralFinance);

//! . 110621.1918     POSSIBLE CLASS OBJECTS STARTS

//const issues = {};

//const years = {};

//const filters = {};

//! . 110621.1918     MAINSTREAM

function yearRange() {
  for (var i = 0; i < ff.length - 1; i++) {
    if (ff[i].year != year) {
      years.push(ff[i].year);
      year = ff[i].year;
    }
  }
}

function writeInnerHtmlTestH2(years) {
  document.getElementById(
    "masterContainer"
  ).innerHTML = `<div class="yearContainer${years}"><h2>Lily${years}</h2></div>;
    `;
}

function DisplayAYearsWorth(year) {
  this.year = year;

  const testContainer = document.getElementById("testContainer");

  const playerElement = document.createElement("p");
  playerElement.innerHTML = "Lily " + this.year + ":" + "<span>0</span>";
  this.scoreElement = playerElement.querySelector("span");
  testContainer.appendChild(playerElement);

  this.getScore = function () {
    return Number(this.scoreElement.innerHTML);
  };
  this.setScore = function (scoreIn) {
    this.scoreElement.innerHTML = scoreIn.toString();
  };
}

function init() {
  yearRange();
  c(years);

  for (var i = 0; i < years.length; i++) {
    writeInnerHtmlTestH2(years[i]);
    //writeInnerHtmlTestH2();
    c(years[i]);
  }

  var player1 = new DisplayAYearsWorth(1);
  var player2 = new DisplayAYearsWorth(2);
  var player3 = new DisplayAYearsWorth(3);

  player1.setScore(player1.getScore() + 1);
  player2.setScore(player2.getScore() + 13);
  player3.setScore(player3.getScore() + 14);
}

//!  22021.0943-------------------ONLOAD

window.onload = function () {
  init();
};
