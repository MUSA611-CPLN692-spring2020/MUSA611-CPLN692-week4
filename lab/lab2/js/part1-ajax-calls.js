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

//bike = $.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-bike-crashes-snippet.json')
//bike.done(function(x){theData=x})
//JSON.parse(theData)
//parseData = JSON.parse(theData)

//runs paralle as following code -- not on sequence -- that's why it works on console but not here
var parsed;
$.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-bike-crashes-snippet.json')
.done(function(resonse){parsed=JSON.parse(resonse)})

var longlat = _.map(parsed,function(obj){
  return {'lat':obj.lat_final,'lng':obj.long_final}
})

_.map(longlat,function(x){L.marker([x.lat,x.lng]).addTo(map)})
