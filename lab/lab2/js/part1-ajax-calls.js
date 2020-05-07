var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 2
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// var promise = $.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-solar-installations.json')
// promise.done(console.log) // no need brackets for console.log 

// var unparsed 
// promise.done(x=> unparsed = x )


// console.log(unparsed);
// console.log(parsed)
var parsed;
$.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-solar-installations.json')
  .done(function(response) {
    parsed = JSON.parse(response)
    console.log(parsed);
  });

// var promise = $.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-solar-installations.json');
// var unparsed; 
// promise.done(x=> unparsed = x ) // basically store the data as a variable 
// parsed = JSON.parse(unparsed)
// console.log(parsed)

/* 
note
log = console.log(123), it will return 123 for this instance but 
log will be undefined 

on the other hand, log = console.log 
will return a function and you can input parameters  into log 
so log(2) wil print out 2 to the console, just like console.log(2)

// getting data using ajax: 

promise = $.ajax(html)
var unparsed;
promise.done(x=> unparsed = x ) // basically store the data as a variable 
JSON.parse(unparsed) // returns a parsed data 

in a condensed form 

var parsed;
$.ajax(*WHATEVER MY URL IS*)
  .done(function(response) {
    parsed = JSON.parse(response)
  }
  
*/