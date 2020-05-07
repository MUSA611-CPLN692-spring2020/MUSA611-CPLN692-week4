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
  // remove markers, use myMarkers global variable
  console.log('boolean field');
  if(booleanField==true){
    _.each(myMarkers, function(m){map.removeLayer(m)});
    // clear array of markers
    myMarkers = []; 
  }
};

/* =====================
  Define a getAndParseData function to grab our dataset through a jQuery.ajax call ($.ajax). It
  will be called as soon as the application starts. Be sure to parse your data once you've pulled
  it down!
===================== */
var getAndParseData = function() {
  /* =====================
    Fill out this function definition
  ===================== */
  // myData is a global variable
  var promise = $.ajax('https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-solar-installations.json');
  // Write a function to prepare your data (clean it up, organize it
  // as you like, create fields, etc
  var parseData = function(data) {return parsed=JSON.parse(data)};

  var create_marker = function(row){
    var lat=row.Y;
    var lng=row.X;
    var label=row.NAME;
    var yearBuilt = row.YEARBUILT;
    var marker = L.marker([lat, lng]).bindPopup("<b>Name: </b>"+label+"<br>Year Built: "+yearBuilt).openPopup();
    return marker;
  }
  var makeMarkers = function(cleanedData) {
  var markers = _.map(cleanedData, create_marker);
  return(markers)}

  promise.done(function(data) {
    myData = parseData(data);
    myMarkers= makeMarkers(myData);
    console.log(myMarkers)
    });

  console.log(myMarkers);
  // how to save the data into the global variable? !!! NOT SURE HOW TO SAVE THE DATA after .done()

};

/* =====================
  Call our plotData function. It should plot all the markers that meet our criteria (whatever that
  criteria happens to be — that's entirely up to you)
===================== */
var plotData = function(markers) {
  /* =====================
    Fill out this function definition
  ===================== */


};
