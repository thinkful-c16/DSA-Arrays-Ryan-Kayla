'use strict';

//=== URLIFY A STRING ===//
let ticks = 0;
function xWhiteSpace(str) { 
  
  str = encodeURIComponent(str.trim()); 
  return str; 

}

console.log(xWhiteSpace('tauhida parveen'));
