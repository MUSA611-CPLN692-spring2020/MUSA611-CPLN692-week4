_.filer(schools, function(s){

  if (typeof s.GRADE_ORG != 'string') {
    reutn s.GRADE_LEVEL <- "K1"
  } else[s.GRADEcemrod.toUppercase.omdexedPF <= 0]
})

var hasHSorKG = function(s){return hasHisghSchool(s) && hasKindergarten(s)}


//lamda
\x = x + 2 //a function: plus two for any give number
// equals: _ + 2
//meaning
function(x) {return x + 2}


var bakedGoodMatches = function(bakedGood) {return _.isMatch(bakedGood, {type : "Cake"})}
_.filter(bakedGoods, bakedGoodMatches)
//also means
_.filter(bakedGoods, function(x) {return _.isMatch(x, {type:"Cake"})})


// _.chain

myData = [0, 10, 100, 1000]
var filtered = _.filter(myData, function (x) {return x > 20})
var mapped - _.map(filtered, function(x) {return x*2})
// can also done by CHAINING all of the arguments together
_.chain(myData)
.filter(function (x) {return x > 20})
.map(function (x) {return x*2})
.value()


promise = $.ajax('https://github.com/OpheliaLYJ/MUSA611-CPLN692-week4/blob/master/data/phillySchools.csv?argument1=123&argument2=abc') //load api data
