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
  ticks++;
  if(numArray.length === 0){
    return []
  }
  if(condition(numArray[0])){
    return [numArray[0], ...filterNum(numArray.slice(1), condition)]
  }
  return filterNum(numArray.slice(1), condition)
}
console.log(filterNum(numArray, x => x > 4))
console.log(ticks);
