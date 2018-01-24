'use strict';

//=== URLIFY A STRING ===//
let ticks = 0;
function xWhiteSpace(str) { 
  // ticks++
  str = encodeURIComponent(str.trim()); 
  return str; 

}

console.log(xWhiteSpace('tauhida parveen'));


//=== Filtering an array ===//
let numArray = [1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1]
function filterNum(numArray, condition){
  // ticks++;
  if(numArray.length === 0){
    return []
  }
  if(condition(numArray[0])){
    return [numArray[0], ...filterNum(numArray.slice(1), condition)]
  }
  return filterNum(numArray.slice(1), condition)
}
console.log(filterNum(numArray, x => x > 4))
// console.log(ticks);


//=== Max Sum in the Array ===//
function maxSum(arr){

  let curr_max = 0, 
      maxSoFar = 0;
  
  for(let i=0; i< arr.length; i++){
    curr_max = Math.max(0, curr_max + arr[i]);
    maxSoFar = Math.max(curr_max, maxSoFar)
  }
  return maxSoFar;
}

console.log('maxSum function output is', maxSum([4,6,-3,5,-2,1]))

//== MERGE ARRAYS ==//

//recurisve attempt
// function mergeArr(arr1, arr2) {
//   if (arr1.length > 0) {
//     return arr1.slice(0);
//   }
//   if (arr2.length === 0) {
//     return [];
//   }

//   return mergeArr(arr1.slice(0), arr2.slice(0), [...arr1, ...arr2]);

// }

const mergeArr = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2];
  newArr.sort((a,b) => {
    ticks++;
    return a - b;
  });
  return newArr;

};

let first = [1, 3, 6, 8, 11];
let second = [2, 3, 5, 8, 9, 10];

console.log(mergeArr(first, second));
console.log(ticks)

//=== Remove Characters ===//
function removeCharacters(string, charsToRmv){

  for(let i=0; i<charsToRmv.length; i++){
    for(let j=0; j<string.length; j++){
      
    }
  }

}