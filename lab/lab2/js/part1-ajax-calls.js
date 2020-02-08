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

var parsed;

$.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-bike-crashes-snippet.json')
.done(function(response) {parsed = JSON.parse(response)})
//$.getJSON similar to ajax but also parsed for you
//promise.done(console.log) //whenever it's done
//can also be
//promise.done(function (x) Pconsole.log(x))
console.log(parsed)
bikecrash_location = _.map(parsed, function (obj) {
  return {'lat' : obj.lat_final, 'lng':obj.long_final
}
})

console.log(bikecrash_location)

bikecrash_location.each(function (each) {L.marker([each.lat, each.lng]]).addTo(map)})
