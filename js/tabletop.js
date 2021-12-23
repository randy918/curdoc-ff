//* Basic JS 51619.2304  *//

//* This is sample Read from Google Sheet notation *//

// function init() {
//  Tabletop.init( { 1kMXjHMrh6xYc2_BNcGL8YP0KINsJHUEo7xN6o0Gq2Xw: ‘https://docs.google.com/spreadsheets/d/0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE/pubhtml',
//  callback: function(data, tabletop) {
//  console.log(data)
//  },
//  simpleSheet: true } )
// }
// window.addEventListener(‘DOMContentLoaded’, init)
// comment

//* This is sample Greensock notation *//
// TweenMax.from('.logo', 8, {opacity:0});
// TweenMax.from('.', 8, {scale:0.5});
// TweenMax.from('p', 4, { scale: 0.5 });
// TweenMax.from('h1', 8, { opacity: 0, scale: 0.5 });

// TweenMax.from('.background', 4, {opacity:0, scale:0.8, delay:1});
// TweenMax.from('h1', 12, {opacity:0, scale:6, delay:1});

// var timeline = new TimelineMax();
// timeline.from('img', 1.5, {scale:6});
// timeline.from('h1', 1.5, {opacity:0, scale:2});

// timeline.from('.logo', 1.5, {scale:6, ease:Bounce.easeOut});
// timeline.from('h1', .7, {opacity:0, scale:2, ease: Back.easeOut.config(1)});
// timeline.from(graph, 2.5, { ease: Back.easeOut.config(1.7), y: -500 });

//* canvas demo js 51619.1812 *//

// const demoCanvas = document.getElementById('canvas-demo').getContext('2d');

// window.onload = function() {

//     demoCanvas.beginPath(); //begin draw sequence

//     var linearGrad = demoCanvas.createLinearGradient(5,5,100,5);
//     linearGrad.addColorStop(0, "blue");
//     linearGrad.addColorStop(.5, "green");
//     linearGrad.addColorStop(1, "red");
//     demoCanvas.strokeStyle=linearGrad;
//     demoCanvas.lineWidth=50;
//     demoCanvas.moveTo(5,5);
//     demoCanvas.lineTo(100,5);
//     demoCanvas.stroke();// change strokeStyle(l10) to fillStyle(l10)
//     and stroke() to fill(). Then, change lineTo(100,5) to rect(5,5,95,50).
//     Results should be almost same.

//     demoCanvas.closePath();  //close draw sequence

// }
