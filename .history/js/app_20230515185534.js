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
        placeholder = "enter at least a 3-letter word or phrase, i.e. atm, cash"
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

document.querySelector("#myRadio12").addEventListener("click", function () {
  deleteSearchBar();
  assembleCurrentYear(2023);
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
  document.getElementById("myRadio11").checked = true;
  c("Index button pressed.");
});

function main() {
  init();
}

window.onload = function () {
  main();
  document.querySelector("#myRadio2").checked = true;
};

const FlowerLoader = (() => {
	const LEAF_SVG =
		'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 23.7 51.8" style="enable-background:new 0 0 23.7 51.8;" xml:space="preserve"><path d="M11.8,0c0,0-26.6,24.1,0,51.8C38.5,24.1,11.8,0,11.8,0z"/></svg>';

	const Selector = {
		CENTER: ".flower__center",
		LEAF: ".flower__leaf",
		LEAF_INNER: ".flower__leaf-inner",
		LEAVES: ".flower__leaves",
	};

	const ClassName = {
		CENTER: "flower__center",
		LEAF: "flower__leaf",
	};

	class FlowerLoader {
		constructor(element) {
			this._element = element;
			this._flowerLeaves = element.querySelector(
				Selector.LEAVES
			);
			this._numberOfLeaves = 7;
			this._rotation = 360 / this._numberOfLeaves;
			this._path = [
				{ x: 15, y: 0 },
				{ x: 16, y: -1 },
				{ x: 17, y: 0 },
				{ x: 16, y: 1 },
				{ x: 15, y: 0 },
			];
			this._location = {
				x: this._path[0].x,
				y: this._path[0].y,
			};
			this._tn1 = TweenMax.to(
				this._location,
				this._numberOfLeaves,
				{
					bezier: {
						curviness: 1.5,
						values: this._path,
					},
					ease: Linear.easeNone,
				}
			);

			this._initialize();
		}

		_initialize() {
			this._addLeaves();
		}

		_addLeaves() {
			for (let i = 0; i < this._numberOfLeaves; i++) {
				const leafElement = document.createElement("div");
				leafElement.className = ClassName.LEAF;
				leafElement.innerHTML = `<div class="flower__leaf-inner">${LEAF_SVG}</div>`;
				this._tn1.time(i);

				TweenMax.set(leafElement, {
					x: this._location.x - 11,
					y: this._location.y - 37,
					rotation: this._rotation * i - 90,
				});

				this._flowerLeaves.appendChild(leafElement);
			}

			this._animate();
		}

		_animate() {
			const leaves = this._flowerLeaves.querySelectorAll(
				Selector.LEAF_INNER
			);
			const center = this._element.querySelector(
				Selector.CENTER
			);

			const timeline = new TimelineMax({
				onComplete: () => {
					timeline.restart(true);
				},
			});

			timeline
				.add(
					TweenMax.fromTo(
						center,
						1,
						{
							scale: 0,
						},
						{
							scale: 1,
							ease: Elastic.easeOut.config(1.1, 0.75),
						}
					),
					0
				)
				.add(
					TweenMax.staggerTo(
						leaves,
						1,
						{
							scale: 1,
							ease: Elastic.easeOut.config(1.1, 0.75),
						},
						0.2
					),
					0.3
				)
				.add(
					TweenMax.to(leaves, 0.3, {
						scale: 1.25,
						ease: Elastic.easeOut.config(1.5, 1),
					})
				)
				.add(
					TweenMax.to(
						this._element.querySelector(Selector.LEAVES),
						1,
						{
							duration: 1.5,
							rotation: 360,
							ease: Expo.easeInOut,
						}
					),
					1.7
				)
				.add(
					TweenMax.to(leaves, 0.5, {
						scale: 0,
						ease: Elastic.easeInOut.config(1.1, 0.75),
					})
				)
				.add(
					TweenMax.to(center, 0.5, {
						scale: 0,
						ease: Elastic.easeInOut.config(1.1, 0.75),
					}),
					"-=0.37"
				);
		}
	}

	return new FlowerLoader(document.body.querySelector(".flower"));
})();