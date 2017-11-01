'use strict';

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

let pairs = [];

let pairHist = [];
if (localStorage.pairHist) {
  pairHist = JSON.parse(localStorage.pairHist);
  if (pairHist.length > 120){
    localStorage.clear();
  }
}

let randomFun = function(){
  return Math.floor(Math.random() * students.length);
};

let pears = function(currentPos){
  let currentPair = [];

  let student1 = students.splice(randomFun(), 1)[0];
  currentPair.push(student1);
  let student2 = students.splice(randomFun(), 1)[0];
  currentPair.push(student2);

  for (let j in pairHist){
    if (pairHist[j].includes(currentPair[0]) && pairHist[j].includes(currentPair[1])) {
      students.push(student1);
      students.push(student2);
      return pears(currentPos);
    }
  }

  pairs[currentPos].push(currentPair[0], currentPair[1]);
};

for (let i = 0; i < 11; i++){
  pairs.push([]);
  pears(i);
}
pairs[pairs.length - 1].push(students[0]);

console.log(pairHist);
console.log(pairs);


let newHist = pairHist.concat(pairs);
localStorage.pairHist = JSON.stringify(newHist);

for (let i in pairs) {
$('ul').append(`<li>${pairs[i][0]}, ${pairs[i][1]}</li>`);

}
