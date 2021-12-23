console.log("Report: " + ff.length + " records");
console.log(" ");

//!  12-22-21.2222 ----------------VARIABLES

let issue;
let downloadTitle;
let num;
let allYears = [];
let filteredYears = [];

const years = [];

//!  12-22-21.2222  ----------------DEFAULT VARIABLES

let year = 0;
let oldYear = 0;
let newYear = 0;
let requestedYear = 2021;
let radioButtons = { All: false, Recent: false, 2022: false, 2021: true };

const digitsInYear = 4;

//!  21921.1621dddd----------------FUNCTIONS

const duplicateJsonArray = function () {
  allYears = [...ff];
};

const createIssueProperties = function () {
  for (var i = 0; i < allYears.length; i++) {
    issue = allYears[i].downloadTitle.substring(
      15,
      allYears[i].downloadTitle.length
    );
    issue = issue[0].toUpperCase() + issue.slice(1);
    issue = issue.replace("-", " ");
    allYears[i].issue = issue;
  }
};

const createYearProperties = function () {
  for (var i = 0; i < allYears.length; i++) {
    allYears[i].year = allYears[i].year = allYears[i].issue.substring(
      allYears[i].issue.length - 4
    );
    c(allYears[i].year);
  }
};

const createRangeOfYears = function () {
  for (var i = 0; i < ff.length; i++) {
    newYear = ff[i].downloadTitle.substring(
      ff[i].downloadTitle.length - digitsInYear
    );

    if (newYear != oldYear) {
      years.push(newYear);
      oldYear = newYear;
    }
  }
};

const createLitButton = function () {
  //todo  121921.1637     create buttons from Range of Years organically
};

const createFilteredYearArray = function () {
  for (var j = 0; j < allYears.length; j++) {
    //    debugger;
    if (requestedYear === Number(allYears[j].year)) {
      filteredYears.push(allYears[j]);
      c(filteredYears.length);
    }
  }
};

const produceFilteredCovers = function () {
  for (var i = 0; i < filteredYears.length; i++) {
    downloadTitle = filteredYears[i].downloadTitle;

    document.getElementById("gridContainer").innerHTML = `
    <div>
  
      ${filteredYears
        .map(function (product) {
          return `
          <div class="box image">
          <img class = "image__img" src ="./images/${product.downloadTitle}.png">
     <div class="image__overlay">
         <a href = "./images/${product.downloadTitle}.pdf"> <img class = "image__img" src ="./images/${product.downloadTitle}.pdf"></a>
  
     </div>
          <h2>${product.issue}</h2>
          </div>
          </div>
          `;
        })
        .join("")}
      `;
  }
};

const deleteAllCovers = function () {
  //todo how to delete dom elements

  $(".box").remove();
};

//! . 122221.2013     EVENT LISTENERS

document
  .querySelector(".buttonGroup__button--all")
  .addEventListener("click", function () {
    deleteAllCovers();
  });

document
  .querySelector(".buttonGroup__button--recent")
  .addEventListener("click", function () {
    deleteAllCovers();
  });

document
  .querySelector(".buttonGroup__button--2022")
  .addEventListener("click", function () {
    deleteAllCovers();
  });

document
  .querySelector(".buttonGroup__button--2021")
  .addEventListener("click", function () {
    deleteAllCovers();
  });

//!  122221.2014    MAIN SEQUENCE

function main() {
  duplicateJsonArray();

  createIssueProperties();

  createYearProperties();

  createRangeOfYears();

  createLitButton();

  createFilteredYearArray();

  produceFilteredCovers();
}

window.onload = function () {
  main();
};
