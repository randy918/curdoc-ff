"use strict";

//!  11-25-21.1750     1.1 Variables & Functions

const upperLimit = 4;
const lowerLimit = 1;
var score = 20;
var highScore = 0;

const getDOMText = (className) => {
  c(className);
  return document.querySelector(className).textContent;
};

const getDOMValue = (className) => {
  return document.querySelector(className).value;
};

const setDOMText = (className, message) =>
  (document.querySelector(className).textContent = message);

const setDOMValue = (className, message) =>
  (document.querySelector(className).value = message);

//!  112821.1459    TESTING AREA

const setCSSTest = (classy, property, propertyIs) => {
  c(classy);
  $("body").css(property, propertyIs);
};
//!  112821.1459    END TESTING AREA

const scoreMinus = function (score) {
  //  score--;
  if (score <= 1) {
    setDOMText(".message", "You Lose");
  }
  c({ score });
  setDOMText(".score", Number(score - 1));
  return score - 1;
};

//!  11-25-21.1750     1.1 Main Program

var secretNumber = r(lowerLimit, upperLimit);

setDOMText(".between", `(Between ${lowerLimit} and ${upperLimit})`);

//document.querySelector('.check').addEventListener('click', getDOMText);

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = r(lowerLimit, upperLimit);
  setCSSTest("body", "backgroundColor", "black");
  setDOMText(".message", "Play now!");
  setDOMText(".number", "?");
  $(".guess").val("");
});

document.querySelector(".check").addEventListener("click", function () {
  let guess = parseInt(getDOMValue(".guess"));
  c(guess);
  c(secretNumber);

  //!  112721.2009    2.0 Answer Check
  //!  112721.2009    2.1 Out of Range
  if (!guess || guess < lowerLimit || guess > upperLimit) {
    setDOMText(".message", "Out of Range");
    guess = 0;
    setDOMValue(".guess", guess);

    //!  112721.2009    2.2 Correct Answer
  } else if (parseInt(guess) === secretNumber) {
    setDOMText(".message", "You Win!");
    // document.querySelector('body').style.backgroundColor = '#60b347';

    //    setCSSTest('body', 'backgroundColor', 'red');
    setCSSTest("body", "backgroundColor", "green");
    setDOMText(".number", secretNumber);

    //!  112721.2009    2.2.1 Maintain High Score
    if (score > highScore) {
      highScore = score;
      c({ highScore });
      setDOMText(".highscore", String(highScore));
    }
    //!  112721.2009    2.3 Low
  } else if (guess < secretNumber && guess >= lowerLimit) {
    setDOMText(".message", "Too low.");
    score = scoreMinus(score);

    //!  112721.2009    2.4 High
  } else if (guess > secretNumber && guess <= upperLimit) {
    setDOMText(".message", "Too high.");
    score = scoreMinus(score);
  }
});
