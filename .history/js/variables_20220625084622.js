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
let downloadName = "";

const digitsInYear = 4;
let storyList = [];
const filteredArticles = [];
let myArray = [];
let nameArray = [];
let dateArray = [];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let dateMonth = "";
let dateYear = "";
let dateArticle = "";
