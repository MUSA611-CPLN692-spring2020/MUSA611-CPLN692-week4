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

// I choose to use the world country capitals data

/* Approach 1: Simply show the downloaded data
$.ajax({url: "https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/world-country-capitals.json"}).done(function(data) {
    if (console && console.log) {
    console.log(data);
    dat=data;
    }
  }
);

console.log(dat);
*/

//-------------------------------------------------------------

//Approach 2: Download and parse the dataset

//Purpose 1: Parse the data
//Purpose 2: Get the coordinates
//Purpose 3: Show the result
$.ajax({url:'https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/world-country-capitals.json'}).done(function(data){
  var parsed_data = JSON.parse(data);
   var parse_coor = _.map(parsed_data, function (x) {
     return {'LAT' : x.CapitalLatitude, 'LONG':x.CapitalLongitude};
   });
   console.log(parsed_data);
   console.log(parse_coor);
});
