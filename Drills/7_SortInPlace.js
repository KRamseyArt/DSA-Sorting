const swap = require('../Helpers/Swap');

function sortInPlace(arr){
  for (let i = 0; i < arr.length; i++){
    let randomI = Math.floor(Math.random() * arr.length);
    swap(arr, i, randomI);
  }

  return arr;
}

function main(){
  const sampleData = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ]

  sortInPlace(sampleData);
  console.log(sampleData);
}

main();