function merge(left, right, arr){
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]){
      arr[outputIndex++] = left[leftIndex++];
    } else {
      arr[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++){
    arr[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++){
    arr[outputIndex++] = right[i];
  }

  return arr;
}

module.exports = merge;