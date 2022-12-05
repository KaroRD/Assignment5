function matrixProduct(mat1, mat2) {
  let result = [];
  for (let i = 0; i < mat1.length; i++) {
    result[i] = [];
    for (let j = 0; j < mat2[0].length; j++) {
      let element = 0;
      for (let k = 0; k < mat1[0].length; k++) {
        element += mat1[i][k] * mat2[k][j];
      }
      result[i][j] = element;
    }
  }
  return result;
}

function sumOfMatrices(mat1, mat2) {
  let result = [];
  for (let i = 0; i < mat1.length; i++) {
    result[i] = [];
    for (let j = 0; j < mat1[i].length; j++) {
      let sum = 0;
      sum += mat1[i][j] + mat2[i][j];
      result[i][j] = sum;
    }
  }
  return result;
}

function sumOfArray(array) {
  let tempt = 0;
  let arr = [];

  for (let i = 0; i < array.length; i++) {
    tempt += array[i];
  }
  arr.push(tempt);
  return arr;
}

function sumOfEachRow(matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push(sumOfArray(matrix[i]));
  }
  return result;
}

function trim(string) {
  let Flag = false;
  let ending = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") Flag = true;
    if (Flag) ending = ending.concat(string[i]);
  }
  return ending;
}

function countWords(text) {
  return text.trim().split(/\s+/).length;
}

module.exports = {
  matrixProduct,
  sumOfArray,
  sumOfEachRow,
  sumOfMatrices,
  trim,
  countWords,
};
