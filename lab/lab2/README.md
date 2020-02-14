# Lab 2

#### Part 1: Plotting with external data (ajax calls)

In [part1-ajax-calls.js](js/part1-ajax-calls.js), you are asked to grab
one of three datasets we have provided via [a dataset
repository](https://github.com/MUSA611-CPLN692-spring2020/datasets/tree/master/json)
on the class github account. Simply make an ajax request for the data and
log the successful result to console. *Remember to use AJAX!*

Hint: github allows you to view the raw (unstyled) version of any file. Use this
to find the appropriate URL for AJAX, otherwise you'll grab the HTML document
which contains the *styled* JSON. This is not what we want!



#### Part 2: Application state: storing and removing information

In [part2-app-state.js](js/part2-app-state.js), you will be
tasked with writing a function for creating, adding, and removing
markers from the map based on data retrieved from the internet. This
task will require that you keep track of the markers somehow: look to
the bottom of the file

#### Part 3: Full application with user input (stretch goal)

In [part3-application.js](js/part3-application.js), you will use
what you've learned thus far in the course to write a full application
with working user input. The user input portion of the task is handled
for you — all you need to do is define the appropriate functions which
are called from code that we've written. Once you've appropriately
defined the `resetMap`, `getData`, and `plotData` functions we've
provided, you should have a fully functioning application complete with
user input. Be sure to look through all the part3 `js` files to get a
sense of how the pieces work.

In particular, look at the variables that are being set in `main.js` and
think about how function scope is being used.
