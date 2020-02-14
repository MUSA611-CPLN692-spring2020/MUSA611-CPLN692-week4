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

//me
my = $.ajax("https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-crime-snippet.json")
//var myF = console.log;
var holder;
var datamap

var parseData = function(x){
  return JSON.parse(x);
};

var latlng = function(obj){
    return{'lat':obj.Lat,'lng':obj.Lng};
  };


var markers = function(x){
  L.marker([x.lat,x.lng]).addTo(map);
};

my.done(function(x){
  holder = x;
  var parse = parseData(holder);
  var datamap = _.map(parse,latlng);
  _.map(datamap,markers)
})





/*
var markers = function(x){
  for (var i = 1; i<x.length; i++){
    L.marker([source[x][1],source[x][0]])
  }
}

my.done(function(x){
  holder = JSON.parse(x)
})

holder.map(function(obj){
  return{'lat':obj.Lat,'lng':obj.Lng};
});

downloadData.done(function(data) {
  var parsed = parseData(data);
  var markers = makeMarkers(parsed);
  plotMarkers(markers);
  removeMarkers(markers);
});
*/
