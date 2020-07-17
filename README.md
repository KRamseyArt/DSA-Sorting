# DSA-Sorting

### 1: Understanding Merge Sort
Given the following List of numbers: [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
- What is the resulting list that will be sorted after 3 recursive calls to mergesort?
  1. Initial Call: Left = [21, 1, 26, 45, 29, 28, 2, 9]
  2. Recursive #1: Left = [21, 1, 26, 45]
  3. Recursive #2: Left = [21, 1]
  4. Recursive #3: Left = [21], Right = [1]
- What is the resulting list that will be sorted after 16 recursive calls to mergesort?
  5. Recursive #4: mergeSort([21]) => [21]
  6. Recursive #5: mergeSort([1]) => [1]
  7. Recursive #6: mergeSort([21, 1]) => merge([21], [1], [21, 1])
  8. Recursive #7: merge returns [1, 21], mergeSort([21, 1]) returns [1, 21]
  9. Recursive #8: mergeSort([26, 45]) => Left[26], Right[45]
  10. Recursive #9: mergeSort([26]) => 26
  11. Recursive #10: mergeSort([45]) => 45
  12. Recursive #11: merge([26], [45], [26, 45]) => [26, 45]; mergeSort([26, 45]) => [26, 45]
  13. Recursive #12: mergeSort([21, 1, 26, 45]) => merge([1, 21], [26, 45], [21, 1, 26, 45]) => [1, 21, 26, 45]
  14. Recursive #13: mergeSort([29, 28, 2, 9]) => Left[29, 28], Right[2, 9]
  15. Recursive #14: mergeSort([29, 28]) => Left[29], Right[28]
  16. Recursive #15: mergeSort([29]) => 29
  17. Recursive #16: mergeSort([28]) => 28
- What are the first 2 lists to be merged?
  - [21], [1]
- Which two lists would be merged on the 7th merge?
  - Left[1, 21, 26, 45], Right[2, 9, 28, 29]

### 2: Understanding QuickSort
1. Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the partition step? Explain your answer.
  - The pivot could have been 17, but could not have been 14
  - **The pivot could have been either 14 or 17**
    - All values to the left of 14 are lower, and all values to the right are greater. This is also true in the case that 17 is the pivot
  - Neither 14 nor 17 could have been the pivot
  - The pivot could have been 14, but could not have been 17

2. Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm.
  - When using the last item on the list as a pivot
    - **First:** [10, 3, 9, **12**, 14, 17, 13, 15, 19, 16]
    - **Second:** [3, **9**, 10, 12, 14, 17, 13, 15, 19, 16]
  - When using the first item on the list as a pivot
    - **First:** [13, 10, 3, 9, 12, **14**, 17, 15, 19, 16]
    - **Second:** [10, 3, 9, 12, **13**, 14, 17, 15, 19, 16]

### 3: Implementing QuickSort
Write a function `qSort` that sorts a dataset using the quicksort algorithm. The dataset to sort is: `89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5`.
- [LINK](./Drills/3_ImplementQuickSort.js)

### 4: Implementing Merge Sort
Write a function `mSort` that sorts the dataset above using the merge sort algorithm.
- [LINK](./Drills/4_ImplementMergeSort.js)

### 5: Sorting Linked List with Merge Sort
Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.
- [LINK](./Drills/5_LinkedListMergeSort.js)

### 6: Bucket Sort
Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. You can't use `arr.splice(), shift() or unshift()` for this exercise.
- [LINK](./Drills/6_BucketSort.js)

### 7: Sort in Place
Write an algorithm to shuffle an array into a random order in place (i.e., without creating a new array).
- [LINK](./Drills/7_SortInPlace.js)

### 8: Sorting Books
Imagine that I gave you 20 books to sort in alphabetical order. Express this as an algorithm and then implement your algorithm.
- WorkInProgress