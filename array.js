'use strict';
const Memory = require('./memory');
const mem = new Memory();


class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = mem.allocate(this.length);
  }
  //cannot preallocate slots using this constructor
  
  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    mem.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size){
    const oldPtr = this.ptr;
    this.ptr = mem.allocate(size);
    if(this.ptr === null){
      throw new Error('Out of Memory')
    }
    mem.copy(this.ptr, oldPtr, this.length);
    mem.free(oldPtr);
    this._capacity = size;
  }
}

module.exports = Array;
