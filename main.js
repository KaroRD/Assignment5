const prompt = require("readline-sync");
const {
  matrixProduct,
  sumOfArray,
  sumOfEachRow,
  sumOfMatrices,
  trim,
  countWords,
} = require("./utils");

let just = [
  [7, 8, 9],
  [5, 12, 21],
  [11, 12, 9],
];

let cause = [
  [1, 5, 8],
  [12, 22, 32],
  [7, 6, 2],
];

let text = prompt.question("write something ");
let bar = prompt.question("write bar ");

console.log(sumOfEachRow(just));
console.log(sumOfMatrices(just, cause));
console.log(matrixProduct(just, cause));
console.log(countWords(text));
console.log(trim(bar));
