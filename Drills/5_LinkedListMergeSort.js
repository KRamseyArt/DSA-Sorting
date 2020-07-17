const LinkedList = require('../Helpers/LinkedList');

function linkedMergeSort(list){
  let currNode = list.head;

  if (currNode.next === null){
    return list;
  }

  let length = 1;

  while (currNode.next !== null){
    length++;
    currNode = currNode.next;
  }
  const middleIndex = Math.floor(length/2);

  let leftList = splitList(list, 0, middleIndex);
  let rightList = splitList(list, middleIndex, length);

  leftList = linkedMergeSort(leftList);
  rightList = linkedMergeSort(rightList);

  return mergeLists(leftList, rightList);
}

// -- HELPERS --

function splitList(list, start, end){
  let currNode = list.head;

  if (currNode === null){
    return null;
  }

  const returnList = new LinkedList();
  let i = 0;

  while (currNode !== null){
    if (i >= start && i < end){
      returnList.insertLast(currNode.value);
    }
    i++;
    currNode = currNode.next;
  }
  return returnList;
}

function mergeLists(left, right){
  const mergedList = new LinkedList();
  let currLeft = left.head;
  let currRight = right.head;

  while (currLeft && currRight){
    if (currLeft.value <= currRight.value){
      mergedList.insertLast(currLeft.value);
      currLeft = currLeft.next;
    } else {
      mergedList.insertLast(currRight.value);
      currRight = currRight.next;
    }
  }

  while (currLeft){
    mergedList.insertLast(currLeft.value);
    currLeft = currLeft.next;
  }
  while (currRight){
    mergedList.insertLast(currRight.value);
    currRight = currRight.next;
  }

  return mergedList;
}

// --- DRILL
function main(){
  const list = new LinkedList();

  const testValues = [
    9,
    4,
    3,
    6,
    7,
    1,
    5,
    2,
    8
  ]

  testValues.forEach(v =>{
    list.insertFirst(v);
  })

  list.display();

  console.log(`\nSORTING...`)

  const sorted = linkedMergeSort(list);
  sorted.display();
}

main();