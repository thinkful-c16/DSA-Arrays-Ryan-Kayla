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

  get(index) {
    console.log('get function ran', index)

    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    console.log(this.ptr, 'this.ptr in get method')
    return mem.get(this.ptr + index);
  }
  
  push(value) {
    console.log(value);
    if (this.length >= this._capacity) {
      console.log('push value when resizing', value)
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    mem.set(this.ptr + this.length, value);
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = mem.get(this.ptr + this.length - 1);
    console.log('Popped value', value);
    this.length--;
    return value;
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
