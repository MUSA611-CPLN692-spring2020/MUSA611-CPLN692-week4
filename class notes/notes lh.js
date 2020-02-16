mydata = [0, 10, 100, 1000]


_.chain(mydata)
  .filter(function(x) { return x > 20 })
  .map(function(x) { return x * 2 })
  .value()

// lab 2 part 1

mypromise = $ajax.("https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-solar-installations.json");

promise.done(function(x) {theData = x});

console.log(theData);

parsedData = JSON.parse(theData);

parsedData.map(function(obj) { return {'lat': obj.lat_final, 'lng': obj.long_final}})
