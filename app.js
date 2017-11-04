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
  console.log('pushed');
};

// Algorithm for generating pairs
const generateTodaysPairs = function(){
  let workingCounter = 0;
  for (let i = 0; i < numOfPairs; i++){
    if (workingCounter > 1000){
      possibleStudentPairs = [];
      pairs = [];
      console.log('no matches! restarting.');
      localStorage.clear();
      generateAllPairs();
      return generateTodaysPairs();
    }
    let randomIndex = randomFun();
    console.log('random index: ' + randomIndex);
    let workingPair = possibleStudentPairs[randomIndex];
    console.log('working pair: ' + workingPair);
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
        console.log('pushed to pair ' + i + ': ' + workingPair);
        possibleStudentPairs.splice(randomIndex, 1);
      }
    }
  }
  console.log('today\'s pairs are: ' + pairs);
  console.log('the remaining available pairs are: ' + possibleStudentPairs);
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

// localStorage.clear();
if (!localStorage.fruitBasket){
  localStorage.clear();
  generateAllPairs();
  console.log('generated pairs');
} else {
  // Load the previously scrambled array of students, and retrieve which iteration of the algorithm we are on.
  possibleStudentPairs = JSON.parse(localStorage.fruitBasket);
}

generateTodaysPairs();

oddPair();

// Push unused student pairs into local storage
localStorage.fruitBasket = JSON.stringify(possibleStudentPairs);

// Append to the DOM
for (let i in pairs) {
  $('ul').append(`<li>${pairs[i][0]}, ${pairs[i][1]}</li>`);
}
if (students.length % 2 !== 0){
  $('ul li:last-child').append(`, ${pairs[pairs.length - 1][2]}`);
}

// There will basically be number of students minus 1 combinations of pairs. Figure out how to algorithmically generate all of the possible combinations. Then assign each set an integer, and return the set based on the integer given as input. If there is an odd number of students, throw that remaining student into a random pair. Then increment that integer and store to localStorage.

// Old Code: if we can get the above working, consider deleting what we don't need from below vvvvv

// let pairHist = [];
// if (localStorage.pairHist) {
//   pairHist = JSON.parse(localStorage.pairHist);
// }
//
//
// let pears = function(currentPos){
//   let currentPair = [];
//
//   let student1 = students.splice(randomFun(), 1)[0];
//   currentPair.push(student1);
//   let student2 = students.splice(randomFun(), 1)[0];
//   currentPair.push(student2);
//
//   for (let j in pairHist){
//     if (pairHist[j].includes(currentPair[0]) && pairHist[j].includes(currentPair[1])) {
//       students.push(student1);
//       students.push(student2);
//       return pears(currentPos);
//     }
//   }
//
//   pairs[currentPos].push(currentPair[0], currentPair[1]);
// };
//
// for (let i = 0; i < 11; i++){
//   pairs.push([]);
//   pears(i);
// }
// pairs[pairs.length - 1].push(students[0]);
//
// console.log(pairHist);
// console.log(pairs);
//
//
// let newHist = pairHist.concat(pairs);
// localStorage.pairHist = JSON.stringify(newHist);
//
