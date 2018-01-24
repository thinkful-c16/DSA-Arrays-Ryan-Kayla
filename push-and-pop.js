'use strict';

const Array = require('./Array');
const arr = new Array(); 


function main(){
  
  Array.SIZE_RATIO = 3;
  
  //create an instance of the array class
  // let arr = new Array();
  
  //add an item to the array

  //=== What is the length, capacity and memory address of your array?
  arr.push(3);
  //*********/
  //The length is 1, capacity is 3 and the ptr is 0; The length is 1
  //because we only have 1 item in the array, the capacity is 3 because of //the size ratio (it's 1:3), and the ptr is 0 because memory head beings at 0 and this is our first array item; the size ratio doesn't get reset until the length exceeds the allocated capacity, which then causes the pointer to redirect to the next available address
  //*******/



  // arr.push(10);
  // arr.push(5);
  // arr.push(15);
  // arr.push(19);
  // arr.push(45);
  // arr.push(10);
  
  console.log(arr);
}
main();