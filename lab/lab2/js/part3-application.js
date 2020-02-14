/* =====================
  Lab 2, part3: a full application (stretch goal)

  We're going to use the skills we've just been practicing to write a full application
  which is responsive to user input.
  At your disposal are a set of variables which we use to track user input (see
  part3-main.js and part3-setup.js for more details on how this is done — we'll
  cover this topic at a later date). Their values will be logged to console to
  aid in debugging.

  In this lab, which is very much open-ended, your task is to use the value of
  these variables to define the functions below. Try to come up with interesting
  uses of the provided user input.

  Some ideas:
    There are two numeric fields: can you write this application to filter
    using both minimum and maximum?
    There is a boolean (true/false) field: can you write your code to filter according
    to this boolean? (Try to think about how you could chop up this data to make this meaningful.)
    There is a string field: can you write your code to filter/search based on user
    input?

  Remember, this is open-ended. Try to see what you can produce.
===================== */

/* =====================
  Define a resetMap function to remove markers from the map and clear the array of markers
===================== */
var resetMap = function() {
  /* =====================
    Fill out this function definition
  ===================== */  
  _.map(markers, function(circle){
    map.removeLayer(circle);
  });

}

/* =====================
  Define a getAndParseData function to grab our dataset through a jQuery.ajax call ($.ajax). It
  will be called as soon as the application starts. Be sure to parse your data once you've pulled
  it down!
===================== */
var raw = $.ajax("https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-solar-installations.json");

var getAndParseData = function(data) {
  /* =====================
    Fill out this function definition
  ===================== */
  var parsed = JSON.parse(data);
  parsed = _.map(parsed,function(arr){
    delete arr['LAT','LONG_','THUMB_URL'];
    arr.isold = arr.YEARBUILT < 2010;
    arr.islarge = arr.KW > 54;
    return arr;
  });
  return parsed;
};

/* =====================
  Call our plotData function. It should plot all the markers that meet our criteria (whatever that
  criteria happens to be — that's entirely up to you)
===================== */
var filter_data;
function kwfilter(data,min,max){
     filter_data = _.filter(data, function(arr){
      if(arr.KW > min && arr.KW < max){
        return arr;
      }
     })
  }
function developer(data,string){
    filter_data = _.filter(data, function(arr){
      if(arr.DEVELOPER.indexOf(string) >= 0){
        return arr;
      }
    })
  }
function year2010(data, checker){
    filter_data = _.filter(data, function(arr){
      if(!checker){
        if(!arr.isold){
          return arr;
        } 
      else {
        if(arr.isold){
          return arr;
        }
      }
      }})
  }

var markers;

function plotmarker(data){
    markers = _.map(data, function(arr){
                var pathOpts = {'radius': Math.log(arr.KW) * 5, 
                                 'fillColor': '#0000FF'}  
                var circle = L.circleMarker([arr.Y, arr.X], pathOpts).bindPopup(arr.DEVELOPER);
                return circle;
              })
    _.map(markers, function(arr){
      arr.addTo(map);
    })
  }



var plotData = function() {
  /* =====================
    Fill out this function definition
  ===================== */
  raw.done(function(data){
    var parse = getAndParseData(data);
    kwfilter(parse,numericField1,numericField2);
    developer(filter_data,stringField);
    year2010(filter_data,booleanField);
    console.log(filter_data);
    plotmarker(filter_data);
  })

};
