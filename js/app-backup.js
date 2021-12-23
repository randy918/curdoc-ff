//!  72519.1708 DICTIONARY ARRAYS RESOURCES

//!  21921.1621------------------------Beginning of program

// var zData = JSON.parse(zydot);

console.log(zydot.length);

//!  21921.1621----------------Initialize variables

var issue;
var downloadTitle;
var currentPdf;
var country;
var flavor;
var kind;
var flag;
var datecode;
var code;
var filename;
var date;
var pdf;
var printer;
var currentRow;
var theTitle;
var theNewTitle;
var theDashTitle;
var num;
var prefix;
var suffix;

var spreadsheetRow;
var prefixAndSuffix;
var webSite;
var disableWeb;
var disableIndesign;
var currentCategory;
var currentActive;
var navText;
var currentSelection = 0;

function init() {
  for (var i = 0; i < zydot.length; i++) {
    //&  21921.1625----------------Variables per loop
    c(i);
    issue = zydot[i].issue;
    downloadTitle = zydot[i].downloadTitle;
    country = zydot[i].country.charAt(0).toLowerCase();
    completeCountry = zydot[i].country;
    flavor = zydot[i].flavor.charAt(0);
    kind = zydot[i].kind.charAt(3);
    flag = "./zimages/" + country + flavor + kind + ".png";
    c(downloadTitle);
    num = i;
    c(num);
    theTitle = zydot[i].title;
    theDashTitle =
      theTitle.replace(/\s+/g, "-").toLowerCase() +
      "-" +
      zydot[i].country.toLowerCase();
    c(theDashTitle);

    ifNew = theTitle.substring(0, 3);

    datecode = zydot[i].datecode;
    code = zydot[i].code;
    filename = "./zfiles/" + datecode + "-" + code;

    date = zydot[i].date;

    pdf = zydot[i].pdf;

    printer = zydot[i].printer;
    if ((printer = ".pdf")) {
      printer = "-.pdf";
    }

    currentRow = i + 1;

    //&  21921.1859---------------Literal Template ATTEMPT

    //&  22121.0950------'PRODUCT' is introduced to map 'DATA to' at line 73,  as easy strings

    document.getElementById("gridContainer").innerHTML = `
    <div>
  
      ${zydot
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

    //&  21921.1827----------------------------------flag
    // generate__flag.css({ width: '180', height: 'auto' })

    // document.getElementById(`${currentRow}-Flag`).src =
    //   "./zimages/" + country + flavor + kind + ".png"

    // c("./zimages/" + country + flavor + kind + ".png")

    //&  21921.1827---------------------------------title
    //----------------------
    // document.getElementById(`${currentRow}-Title`).innerHTML = theTitle;

    // //& . 21921.1829-------------------Datecode/Code Line
    // document.getElementById(`${currentRow}-Code`).innerHTML =
    //   data[i].datecode + ` ` + data[i].code;

    // //&  21921.1831------------------Actual Date of Origin
    // document.getElementById(`${currentRow}-Date`).innerHTML = data[i].date;

    // //& . 21921.1833---------------------------------Image
    // $(`#${currentRow}-Image`).css({ width: "180", height: "auto" });
    // document.getElementById(`${currentRow}-Image`).src =
    //   "./zimages/" + datecode + "-" + code + ".png";

    // //&  21921.1842------------------------------------pdf

    // document.getElementById(`${currentRow}-Pdf`).href =
    //   "./zfiles/" + code + "-" + datecode + "-email.pdf";

    // //&  21921.1845------------------------------printer ai
    // document.getElementById(`${currentRow}-Print`).href =
    //   "./zfiles/" + code + "-" + datecode + "-printer.ai";
    //----------------------

    //!  72519.1250   beginning of program---------------INIT

    //!  72519.1250 ...spreadsheet access

    // var public_spreadsheet_url =
    //   'https://docs.google.com/spreadsheets/d/1bj2LbdM6FfbyVN2AVT6hmaqg-zuuch8biPH6w02xqxk/pubhtml'

    // Tabletop.init({
    //   key: public_spreadsheet_url,
    //   callback: showInfo,
    //   simpleSheet: true
    // })
  }

  //!  22021.0943-------------------official START of program
}

window.onload = function () {
  init();
  // !  RM Basic default functions 60819.1707
  //todo   function a(toAlert)
  //todo   function c(toConsole)
  //todo   function cr(toConsole)
  //todo   function r(min, max)  Random integers, can be just 'max'
  //todo   function getTime()--works! it is 72519.1414 format
  //todo   function getCompleteDate()
  //todo   function getMinute()
  //todo   function getHour()
  //todo   function getHour00()
  //todo   function get24Hour()
  //todo   function get24Hour00()
  //todo   function getDay()
  //todo   function getDay00()
  //todo   function getMonth()
  //todo   function getMonth00()
  //todo   function getYear()
  //todo   function getYear00()
  //todo   function t()    eternal timestamp long number
  //todo   function placeText(myIdClass, text)
  //todo   function placeText2(myIdClass, text)
  //todo   function getText(myIdClass)....brings whole line incl. tags
  //todo   function getOuterText(myIdClass)
  //todo   function getInnerText(myIdClass)
  //todo   function addClass(myIdClass, newClass)
  //todo   function removeClass(myIdClass, removeClass)
  //todo   function changeBackgroundColor(myIdClass, color)
  //todo   function changeTypeColor(myIdClass, color)
  //todo   function changeTypeSize(myIdClass, size)
  //todo   function addCSSText(myIdClass, text)
};
