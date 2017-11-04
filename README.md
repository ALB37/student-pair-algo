# Student Pair Generator

**Andrew Bloom and Catherine Looper**
**Version 1.0.0**

For Dustin Byers so that he can create student pairs that make sense.

## Overview
This app generates random pairs of students for pair programming assignments. If there is an odd number of students, the last student will be placed in a group of three. This app stores all of the possible pairings, and when one is used, that pair is removed from storage. This makes it so as to minimize the possibility of repeated pairs.

This app is random, not algorithmic. As such, every possible combination of pairs will not necessarily happen before the memory is reset. When a random drawing will result in infinite recursion, the memory is reset (localStorage cleared and arrays reset) so as to avoid this from happening. From practical observation, this happens after about 10 drawings in a class of 22 students. This is plenty for our needs. A second app is being written which is algorithmic in nature; each possibility will be cycled through. This allows a longer cycle before repetition, however it is not random the way this app is.

## Getting Started
To run the app, clone this repo onto your machine. Then simply run index.html. For a new set of pairs, refresh your browser window. This app is pre-loaded with the names of the students from our code 301 class. For a different group of students, simply replace that groups' names into the students array in app.js and save the file. 


## Change Log
**no changes currently**

## Credits and Collaborations
Created by Andrew Bloom and Catherine Looper. Valuable input from Ariel Pedraza and Nicholas Carignan. Created using jQuery to render the list from JS to the DOM.
