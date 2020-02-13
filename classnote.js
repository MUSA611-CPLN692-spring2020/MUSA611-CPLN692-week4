\x => x+2
_+2

var bakedGoodMatches = function(bakedGood){
  return _.match(backedGood,{"type":'cake'})
}

_.filter(bakedGoods,bakedGoodMatches)

mydata = [0,10,100,1000]

_.filter(mydata,function(x){
  return x>20
})

//but this will lead to those has been filtered also dobled
_.map(mydata,function(x){
  return x*2
})

_.chain(maydata)
  .filter(function(x){  return x>20})
  .map(function(x){return x*2})

//API
promise = $.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-bike-crashes-snippet.json?
argument1=123 && argument2 =abc')

promise.done(console.log())

//https://api.jquery.com/jquery.ajax/

plus2 = function(x){return 2+x}

theNumberFive = pluse2(3)

var x = 0
// x changed to 123
sideEffect = function (){
  x=123;
  cosole.log(x)}

//x still 0
pureF = function (){
  var x=123;
  console.log(x)}

promise = $.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-bike-crashes-snippet.json')

promise.done(function(x){theData=x})

JSON.parse(theData)

parseData = JSON.parse(theData)

parseData.map(function(obj){
  return {'lat':obj.lat_final,'lng':obj.long_final}
})
