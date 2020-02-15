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
  console.log('Removing Markers');
  console.log(myMarkers);
  //var markers;
  _.map(myMarkers, function(marker){
      console.log('Removed Marker', marker._latlng.lat, marker._latlng.lng);
      map.removeLayer(marker);  
  }); 
  myMarkers.length = 0;
  console.log(myMarkers);
  return myMarkers  ;
};

/* =====================
  Define a getAndParseData function to grab our dataset through a jQuery.ajax call ($.ajax). It
  will be called as soon as the application starts. Be sure to parse your data once you've pulled
  it down!
===================== */

//This function parses the data and returns the parsed data
var parseData = function(downloaded_data) {
  console.log('Parsing Data');
  if(typeof downloaded_data !== 'undefined'){
    var parse = JSON.parse(downloaded_data);
    return parse;
  }
};

//this function downloads the data and then passes it into the parse function to parse the data. 
//It returns the output of the parsed data
var getAndParseData = function(){
  $.ajax({
    url: "https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-crime-snippet.json"
  })
   .done(function(data){ 
     myData = parseData(data); 
     console.log('My Data', myData);
     console.log('My Markers', myMarkers);
     return myData;
    });
};

/* =====================
  Call our plotData function. It should plot all the markers that meet our criteria (whatever that
  criteria happens to be — that's entirely up to you)
===================== */
//Lat: 39.9771532618949
//Lng: -75.1716547369047

//This function filters the parsed data according to the filters inputted by the user
//The output of this is a filtered list that is returned
var filter_data = function(myData){
  console.log(myData);
  //var cleanedData = [];
  var lat = numericField1;
  console.log(lat);
  var long = numericField2;
  console.log(long);
  var bool = booleanField;
  console.log(bool);
  var str = stringField;
  console.log(str);

  var x = [];

  _.map(myData, function(data){
    //console.log(data);
    if(data.Lat >= lat && data.Lng >= long){
      console.log('1'); 
      x.push(data);
    }
    return x;
  });

  myData = x;
  console.log('x', myData);
  return myData;
};

//This function makes markers from the filtered data
//The output of this function is passed into the plotMarkers function
var makeMarkers = function(myData) {
  console.log('Making Markers');
  console.log('Marker', myMarkers);
  _.map(myData, function(data){
    myMarkers.push(L.circleMarker([data.Lat, data.Lng]).bindPopup(data['Location Block']));
  });
  console.log(myMarkers);
  return myMarkers;
};

//This function plots the markers from above
var plotMarkers  = function(myMarkers) {
  console.log('Plotting Markers');
  _.map(myMarkers, function(data){
    data.addTo(map);
  });
};

//This function calls the above functions
var plotData = function() {
  var filter = filter_data(myData);
  var marker = makeMarkers(filter);
  var plot = plotMarkers(marker);
  return plot;
};


