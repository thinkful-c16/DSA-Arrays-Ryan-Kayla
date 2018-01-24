'use strict';
const Memory = require('./memory');
const mem = new Memory();


class Array {
  constructor(initialCapacity) {
    this.length = 0;
    this.capacity = initialCapacity;
    this.ptr = mem.allocate(this.length);
  }
  //cannot preallocate slots using this constructor
  
  // push(value) {
  //   if (this,length >= this.capacity) {
  //     this._resize((this.lengh))
  //   }
  // }

}

let myArr = new Array(20);
// myArr = [1, 2, 3, 4];


console.log(myArr);