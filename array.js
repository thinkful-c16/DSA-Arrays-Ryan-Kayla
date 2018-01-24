'use strict';
const Memory = require('./memory');
const mem = new Memory();


class Array {
  constructor() {
    this.length = 0;
    this.ptr = mem.allocate(this.length);
  }
}

let myArr = new Array();
myArr = [1, 2, 3, 4];


console.log(myArr.mem);
