function bucketSort(arr, low, high){
  const numMap = new Map();

  for (let i = 0; i < arr.length; i++){
    if (numMap.get(arr[i]) === undefined){
      numMap.set(arr[i], 1);
    } else {
      numMap.set(arr[i], numMap.get(arr[i]) + 1);
    }
  }

  let arrI = 0;

  for ( let i = low; i <= high; i++){
    let numAppearing = numMap.get(i);
    
    while (numAppearing){
      arr[arrI] = i;
      numAppearing--;
      arrI++;
    }
  }
  return arr;
}

function main(){
  const arr = [9, 2, 1, 3, 7, 4, 6, 5, 8];
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  bucketSort(arr, min, max);
  console.log(arr)
}

main();