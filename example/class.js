//promise = $.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/MUSA611-CPLN692-week4/master/data/phillySchools.csv?
//OBJECTED = 1 && OBJECTED = 2')
//promise.done(console.log())
plus2 = function(s){
  return 2+s;
};
theNumberFive = plus2(3);

x=0;
sideEffect = function(){
  x = 123;
  console.log(123)};

//注意var local variable x不会被改变
pureF = function(){
  var x = 123;
  console.log(123);
};

//没有括号//

// Class
mypromise = $.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-bike-crashes-snippet.json')
mypromise.done(function(x){
  theData = x
})
parsedData = JSON.parse(theData) //from jason to javascript objects
parsedData.map(function(obj){
  return{'lat':obj.lat_final,'lng':obj.long_final}
})
