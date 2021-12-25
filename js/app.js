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
requestedYear = 0;

let button2018 = 2018;
let button2019 = 2019;
let button2020 = 2020;
let button2021 = 2021;
let button2022 = 2022;
let radioButtons = { All: false, Recent: false, 2022: false, 2021: true };
let currentButton = "Recent";

const digitsInYear = 4;

//!  21921.1621dddd----------------FUNCTIONS

const init = function () {
  duplicateJsonArray();

  createIssueProperties();

  createYearProperties();

  createRangeOfYears();
  filteredYears = allYears.slice();
  filteredYears.length = 12;
  produceFilteredCovers();
};

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
  $(".box").remove();
};

//! . 122221.2013     EVENT LISTENERS
//todo duplicate the array,  dont iterate
document.querySelector("#myRadio1").addEventListener("click", function () {
  filteredYears.length = 0;
  filteredYears = allYears.slice();
  produceFilteredCovers();
});

//todo duplicate the array,  use first 12
document.querySelector("#myRadio2").addEventListener("click", function () {
  filteredYears = allYears.slice();
  filteredYears.length = 12;
  produceFilteredCovers();
});

document.querySelector("#myRadio3").addEventListener("click", function () {
  //  deleteAllCovers();
  filteredYears.length = 0;
  for (var j = 0; j < allYears.length; j++) {
    //    debugger;
    if (button2022 === Number(allYears[j].year)) {
      filteredYears.push(allYears[j]);
      c(filteredYears.length);
      produceFilteredCovers();
    }
  }
});

document.querySelector("#myRadio4").addEventListener("click", function () {
  //  deleteAllCovers();
  filteredYears.length = 0;
  for (var j = 0; j < allYears.length; j++) {
    //    debugger;
    if (button2021 === Number(allYears[j].year)) {
      filteredYears.push(allYears[j]);
      c(filteredYears.length);
      produceFilteredCovers();
    }
  }
});

document.querySelector("#myRadio5").addEventListener("click", function () {
  //  deleteAllCovers();
  filteredYears.length = 0;
  for (var j = 0; j < allYears.length; j++) {
    //    debugger;
    if (button2020 === Number(allYears[j].year)) {
      filteredYears.push(allYears[j]);
      c(filteredYears.length);
      produceFilteredCovers();
    }
  }
});

document.querySelector("#myRadio6").addEventListener("click", function () {
  //  deleteAllCovers();
  filteredYears.length = 0;
  for (var j = 0; j < allYears.length; j++) {
    //    debugger;
    if (button2019 === Number(allYears[j].year)) {
      filteredYears.push(allYears[j]);
      c(filteredYears.length);
      produceFilteredCovers();
    }
  }
});

document.querySelector("#myRadio7").addEventListener("click", function () {
  //  deleteAllCovers();
  filteredYears.length = 0;
  for (var j = 0; j < allYears.length; j++) {
    //    debugger;
    if (button2018 === Number(allYears[j].year)) {
      filteredYears.push(allYears[j]);
      c(filteredYears.length);
      produceFilteredCovers();
    }
  }
});

//!  122221.2014    MAIN SEQUENCE

function main() {
  init();

  createLitButton();

  createFilteredYearArray();

  produceFilteredCovers();
}

window.onload = function () {
  main();
};
