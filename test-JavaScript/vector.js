// Write a function that takes an array of 3D vectors and returns the shortest one.
// Each vector is represented with an array that contains 3 elements (x, y and z).
// If multiple vectors have the same length, the function should return any one of them.

// For example, for the array of 3D vectors [ [1, 1, 1], [2, 2, 2], [3, 3, 3] ]
// findShortest should return the first vector (array [1, 1, 1]) because it is the shortest.
// ------------------------------------------------------------------------------------------

// calculator length of each vector
function lengthOfVector(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i];
  }
  return Math.sqrt(sum);
}
//sort in increasing order
function sortElementByLength(arr) {
  arr.sort((a, b) => lengthOfVector(a) - lengthOfVector(b));
}

// return first element
function findShortest(vectors) {
  sortElementByLength(vectors);
  return vectors[0];
}

vectors = [
  [3, 2, 3],
  [4, 4, 3],
  [0, 0, 10],
  [2, 3, 4],
  [1, 0, 9],
  [10, 0, 0],
  [2, 3, 3]
];
findShortest(vectors);
console.log(vectors[0]);
