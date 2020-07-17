const merge = require('../Helpers/Merge');

function mergeSort(arr){
  if (arr.length <= 1){
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mergeSort(left);
  right = mergeSort(right);
  
  return merge(left, right, arr);
}

module.exports = mergeSort;