'use strict';

const Array = require('./Array');
const arr = new Array(); 


function main(){
  
  Array.SIZE_RATIO = 3;

  //************* PUSH *************//


  //=== What is the length, capacity and memory address of your array?

  arr.push(3);

  //The length is 1, capacity is 3 and the ptr is 0; The length is 1
  //because we only have 1 item in the array, the capacity is 3 because of //the size ratio (it's 1:3), and the ptr is 0 because memory head beings at 0 and this is our first array item; the size ratio doesn't get reset until the length exceeds the allocated capacity, which then causes the pointer to redirect to the next available address

  //====What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code

  arr.push(5);
  arr.push(15);
  arr.push(19); //resizing happens here
  arr.push(45);
  arr.push(10);

  //The length is 6, the capacity is 12 and the ptr is 3; When the fourth item is pushed into the array (19), it exceeds the allocated capacity in memory, which was 3; So now, it gets reallocated starting at the address 3 with the capacity 12; this happens because the length exceeded the capacity of 3 so then the _resize method kicks in and we multiply the length (in this case, 3, +1) by the size ratio which gives us 12. Given the index starts at 0, the ptr is 3 because the fourth element is the next available slot for the re-sized array

  //************* POP *************//

  arr.pop();
  arr.pop();
  arr.pop();


  //====What is the length, capacity and address of your array? Explain the result of your program after adding the new lines of code

  //The length is 3, the capacity is 12 and the ptr is 3; the length is 3 because we popped three values from the array; the capacity is still 12 because all we're doing is decreasing the length and retainting the total capacity in case we want to use it later; When we resized before (pushing 4th element) we moved the ptr so it stays at 3 no matter how many times you pop


  
  console.log(arr);
}
main();