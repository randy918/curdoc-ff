console.log("Report: " + ff.length + " issues"); // seems ace c5-14-22.1745
console.log("Report: " + articles.length + " articles"); // seems ace c5-14-22.1745

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
    issue = ff[i].downloadTitle.substring(15, ff[i].downloadTitle.length);
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

const physicalSearchBar = function () {
  document.getElementById("searchContainer").innerHTML = `
  <div id = "searchWrapper">
  <h1><br></h1>
    <input
        type = "text"
        name = "searchBar"
        id = "searchBar"
        placeholder = "enter at least a 3-letter word or phrase, i.e. cash, flowers"
    />
        </div>
        <br>
  `;
};

const showArticles = function () {
  for (var i = 0; i < filteredArticles.length; i++) {
    //downloadTitle = filteredYears[i].downloadTitle;

    document.getElementById("gridContainer").innerHTML = `
    <div>
  
      ${filteredArticles
        .map(function (product) {
          return `
          <div class="box image">
          <img class = "image__img" src ="./images/${product.fileCore}.png">
     <div class="image__overlay--articles">
         <a href = "./images/${
           product.fileCore
         }.pdf"> <img class = "image__img" src ="./images/${product.fileCore}.pdf"></a>
  
     </div>
          <h4>${product.date + ", p" + product.page}</h4>
          <h1>${product.name}</h1>
          </div>
          </div>
          `;
        })
        .join("")}
      `;
  }
};

const darkenBackground = function () {
  $("body").css(
    "background-image",
    "url(../images/shutterstock_1687574617-dark.png)"
  );
};

const getSearchInput = function () {
  const searchBar = document.getElementById("searchBar");

  searchBar.addEventListener("keyup", (e) => {
    filteredArticles.length = 0;
    searchPhrase = e.target.value.toLowerCase();
    c(searchPhrase);

    for (var i = 0; i < articles.length; i++) {
      const result = articles[i].name.toLowerCase().includes(searchPhrase);

      if (result) {
        filteredArticles.push(articles[i]);
      } else {
        deleteGridContainer();
      }
      // t
    }
    c(filteredArticles.length);

    if (searchPhrase.length > 2) {
      showArticles();
    }

    //!  61922.2303         SHOW ARTICLES ON DISPLAY
  });
};

const createSearchBar = function () {
  deleteGridContainer();
  physicalSearchBar();
  getSearchInput();

  // const charactersList = document.getElementById("charactersList");
};

const emptySearchMessage = function () {
  document.getElementById("searchMessageContainer").innerHTML = `
      <h1>No articles match your search.</h1>
   `;
};

const deleteSearchBar = function () {
  document.getElementById("searchContainer").innerHTML = `
   `;
  $("body").css(
    "background-image",
    "url(../images/shutterstock_1687574617.jpg)"
  );
};

const deleteGridContainer = function () {
  document.getElementById("gridContainer").innerHTML = `
   `;
};

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
  darkenBackground();
  c("Index button pressed.");
});

document.querySelector("#toSearch").addEventListener("click", function () {
  createSearchBar();
  darkenBackground();
  
  c("Index button pressed.");
});


function main() {
  init();
}

window.onload = function () {
  main();
  document.querySelector("#myRadio2").checked = true;
};
