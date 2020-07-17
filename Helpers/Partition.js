const swap = require('./Swap');

function partition(arr, start, end){
  const pivot = arr[end - 1];
  let j = start;

  for (let i = start; i < end - 1; i++){
    if (arr[i] <= pivot){
      swap(arr, i, j);
      j++;
    }
  }

  swap(arr, end-1, j);
  return j;
}

module.exports = partition;