

console.log("Report: " + ff.length + " records");// seems ace c5-14-22.1745 
console.log("Self function test: " + r(8, 9));//my functions test
console.log(ff[3]);//my functions test

console.log(articles[3] [0]);//my functions test
console.log(articles[3] [1]);//my functions test



//!  12-22-21.2222 -----------------VARIABLES


let issue;
let downloadTitle;
let num;
let allYears = [];
let filteredYears = [];
let reverseFilteredYears = [];

const years = [];

//!  12-22-21.2222  ----------------DEFAULT VARIABLES

let year = 0;
let oldYear = 0;
let newYear = 0;
let requestedYear = 0;

let button2015 = 2015;
let button2016 = 2016;
let button2017 = 2017;
let button2018 = 2018;
let button2019 = 2019;
let button2020 = 2020;
let button2021 = 2021;
let button2022 = 2022;
let radioButtons = { All: false, Recent: false, 2022: false, 2021: true };
let currentButton = "Recent";
let initFlag = false;
let searchPhrase = "";

const digitsInYear = 4;
let storyList = [];
const filteredArticles = [];

c({ff});


//!  61922.1643         AX TEST CONST
const request = new XMLHttpRequest();



//!  21921.1621dddd----------------STORY COLLECTI




//!  21921.1621dddd----------------FUNCTIONS

const init = function () {
  initFlag = true;
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

const assembleCurrentYear = function (year) {
  filteredYears.length = 0;
  for (var j = 0; j < allYears.length; j++) {
    if (year === Number(allYears[j].year)) {
      filteredYears.push(allYears[j]);
      c(filteredYears.length);
    }
  }
  reverseFilteredCovers();
  produceFilteredCovers();
};

const reverseFilteredCovers = function () {
  reverseFilteredYears = filteredYears.reverse();
  filteredYears = reverseFilteredYears;
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

//!  61322.1714         SEARCH BASED FUNCTIONS BEGIN

const createSearchBar = function () {
    console.log("createSearchBar function");

    deleteGridContainer();

    document.getElementById("searchContainer").innerHTML =
        `
  <div id = "searchWrapper">
    <input
        type = "text"
        name = "searchBar"
        id = "searchBar"
        placeholder = "word or phrase"
    />
        </div>
  `;
const charactersList = document.getElementById("charactersList");

    const searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("keyup", (e) => {

            searchPhrase = (e.target.value.toLowerCase); 

            c(searchPhrase);
            c(articles.length);

            for (var i = 0; i < articles.length; i++) {
filteredArticles = [];
                c(articles[i].name);

            }



            // filteredArticles = articles.filter( character => {
            //     return character.name.contain(searchPhrase)
            // });
           
            // c({ storyList });

            // const loadCharacters = async () => {
            //     try {
            //         const res = await fetch(articles);
            //         storyList = await res.json();
            //         displayCharacters(storyList);
            //         c(storyList);
            //     } catch (err) {
            //         console.error(err);
            //     }
            // };
        },
    );
};



const assembleSearchResults = function () {

    console.log("assembleSearchResults function");

}

//!  51522.1100         SEARCHBAR FUNCTIONS

const deleteSearchBar = function()
 { 
  document.getElementById("searchContainer").innerHTML = `
   `;
}
const deleteGridContainer = function()
 { 
  document.getElementById("gridContainer").innerHTML = `
   `;
}

const assembleCurrentStories = function () {

    console.log("assembleCurrentStories function");


};


//! . 122221.2013     EVENT LISTENERS
//todo duplicate the array,  dont iterate
document.querySelector("#myRadio1").addEventListener("click", function () {
  deleteSearchBar();
  requestedYear = "All";
  filteredYears.length = 0;
  filteredYears = allYears.slice();
  produceFilteredCovers(filteredYears);
});

//todo duplicate the array,  use first 12
document.querySelector("#myRadio2").addEventListener("click", function () {
  deleteSearchBar();
  requestedYear = "Recent";
  filteredYears = allYears.slice();
  filteredYears.length = 12;
  produceFilteredCovers();
});

document.querySelector("#myRadio3").addEventListener("click", function () {
  deleteSearchBar();
  assembleCurrentYear(2022);
});

document.querySelector("#myRadio4").addEventListener("click", function () {
  deleteSearchBar();  
  assembleCurrentYear(2021);
});

document.querySelector("#myRadio5").addEventListener("click", function () {
  deleteSearchBar();  
  assembleCurrentYear(2020);
});

document.querySelector("#myRadio6").addEventListener("click", function () {
  deleteSearchBar();
  assembleCurrentYear(2019);
});

document.querySelector("#myRadio7").addEventListener("click", function () {
  deleteSearchBar();
  assembleCurrentYear(2018);
});

document.querySelector("#myRadio8").addEventListener("click", function () {
  deleteSearchBar();
  assembleCurrentYear(2017);
});

document.querySelector("#myRadio9").addEventListener("click", function () {
  deleteSearchBar();
  assembleCurrentYear(2016);
});

document.querySelector("#myRadio10").addEventListener("click", function () {
  deleteSearchBar();
  assembleCurrentYear(2015);
});

document.querySelector("#myRadio11").addEventListener("click", function () {
  createSearchBar();
  c("Index button pressed.")
});


//!  61822.2254         AJAX

c(1);
c(2);

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
request.send();

setTimeout(() => {
    c('callback function fired')
}, 2000);

// commttt
c(3);
c(4);

//!  61922.1646         AJAX END



//!  122221.2014    MAIN SEQUENCE

function main() {
  init();
}

window.onload = function () {
  main();
  document.querySelector("#myRadio2").checked = true;
};
