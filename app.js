'use strict';

// List of students in the class
let students = [
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

// Define a factorial function
const factorial = function(num){
  let value = 1;
  for (let i = 2; i <= num; i++){
    value *= i;
  }
  return value;
};

// Check if number of students in class is odd or even, and return an even num
const parity = students.length % 2 === 0 ? students.length : students.length - 1;

// Calculate the possible number of unique pairs for a given class
const totalCombinations = factorial(parity) / (2 * factorial(parity - 2));

// Define the array of students which we will return at the end.
const pairs = [];

// Check if there is localStorage
if (!localStorage.fruitBasket){
  // If there isn't any localStorage, scramble the array of students and store that scrambled array in localStorage for future retrieval.

} else {
  // Load the previously scrambled array of students, and retrieve which iteration of the algorithm we are on.
}

/////////////////////////////////////
// Algorithm for generating pairs. //
/////////////////////////////////////

// There will basically be number of students minus 1 combinations of pairs. Figure out how to algorithmically generate all of the possible combinations. Then assign each set an integer, and return the set based on the integer given as input. If there is an odd number of students, throw that remaining student into a random pair. Then increment that integer and store to localStorage.






// Old Code: if we can get the above working, consider deleting what we don't need from below vvvvv

// let pairHist = [];
// if (localStorage.pairHist) {
//   pairHist = JSON.parse(localStorage.pairHist);
// }
//
// let randomFun = function(){
//   return Math.floor(Math.random() * students.length);
// };
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
// for (let i in pairs) {
//   $('ol').append(`<li>${pairs[i][0]}, ${pairs[i][1]}</li>`);
// }
