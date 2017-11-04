'use strict';

/////////////////
// Definitions //
/////////////////

// List of students in the class
const students = [
  'adrian',
  'andrew',
  'ariel',
  'catherine',
  'dre',
  'dustin',
  'fred',
  'garrett',
  'jeffk',
  'jeffm',
  'joe',
  'joel',
  'joy',
  'kat',
  'kerry',
  'matti',
  'mattl',
  'nicholasc',
  'nickg',
  'phelan',
  'robert',
  'seth',
  'will',
];

// Number of even pairs
const numOfPairs = (students.length % 2 === 0) ? (students.length / 2) : ((students.length - 1) / 2);

// Define an array of possible pairs that can exist
let possibleStudentPairs = [];

// Define the array of students which we will return at the end.
let pairs = [];

///////////////
// Functions //
///////////////

// Define a factorial function
const factorial = function(num){
  let value = 1;
  for (let i = 2; i <= num; i++){
    value *= i;
  }
  return value;
};

// Random number generator
const randomFun = function(){
  return Math.floor(Math.random() * possibleStudentPairs.length);
};

// Generate all possible pairs
const generateAllPairs = function(){
  for (let i = 0; i < students.length - 1; i++){
    for (let j = i + 1; j < students.length; j++){
      let workingArr = [];
      workingArr.push(students[i]);
      workingArr.push(students[j]);
      possibleStudentPairs.push(workingArr);
    }
  }
};

// Algorithm for generating pairs
const generateTodaysPairs = function(){
  let workingCounter = 0;
  for (let i = 0; i < numOfPairs; i++){
    // because we are generating the pairs randomly and not algorithmically, the probability of being able to generate every single possible pair is a near impossibility. The following code block clears local storage and resets everything if the code looks like it is unable to find a solution with the pairs that are remaining. The pairs could be generated algorithmically, but this is a more random approach which makes the pairing more interesting! If you do it algorithmically, if you are a student you could theoretically figure out who all of your partners are going to be for both weeks of the 301 course. If one starts from scratch, it is highly likely that 10 iterations (2 weeks of pair assignments) will make it through without this code block getting triggered. If it does get triggered, only a small fraction of the class will get repeat partners. I believe Nicholas C. is working on an algorithmic variety of solving this problem, based off a fork of an earlier iteration of this code; one which was not working as desired.
    if (workingCounter > 1000){
      possibleStudentPairs = [];
      pairs = [];
      localStorage.clear();
      generateAllPairs();
      return generateTodaysPairs();
    }

    let randomIndex = randomFun();
    let workingPair = possibleStudentPairs[randomIndex];

    if (pairs.length === 0){
      pairs.push(workingPair);
      possibleStudentPairs.splice(randomIndex, 1);
    } else {
      let used = false;
      for (let j = 0; j < pairs.length; j++){
        if (pairs[j].includes(workingPair[0]) || pairs[j].includes(workingPair[1])){
          workingCounter++;
          i--;
          used = true;
          break;
        }
      }
      if (!used) {
        pairs.push(workingPair);
        possibleStudentPairs.splice(randomIndex, 1);
      }
    }
  }
};

// If there is a leftover student not in a pair, add them to an existing pair.
const oddPair = function(){
  if (students.length % 2 !== 0){
    for (let i = 0; i < students.length; i++){
      let studentUsed = false;
      for (let j = 0; j < pairs.length; j++){
        if (pairs[j].includes(students[i])){
          studentUsed = true;
          break;
        }
      }
      if (!studentUsed){
        pairs[pairs.length - 1].push(students[i]);
        break;
      }
    }
  }
};

/////////////////
// Executables //
/////////////////

// Bring in pair history or create it if needed
if (!localStorage.fruitBasket){
  localStorage.clear();
  generateAllPairs();
} else {
  possibleStudentPairs = JSON.parse(localStorage.fruitBasket);
}

generateTodaysPairs();

oddPair();

// Load unused student pairs into local storage
localStorage.fruitBasket = JSON.stringify(possibleStudentPairs);

// Append to the DOM
for (let i in pairs) {
  $('ul').append(`<li>${pairs[i][0]}, ${pairs[i][1]}</li>`);
}
if (students.length % 2 !== 0){
  $('ul li:last-child').append(`, ${pairs[pairs.length - 1][2]}`);
}
