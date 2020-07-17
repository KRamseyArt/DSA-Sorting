const partition = require('../Helpers/Partition');

function quickSort(arr, start=0, end=arr.length){
  if (start >= end){
    return arr;
  }

  const middle = partition(arr, start, end);
  arr = quickSort(arr, start, middle);
  arr = quickSort(arr, middle+1, end);

  return arr;
}

module.exports = quickSort;