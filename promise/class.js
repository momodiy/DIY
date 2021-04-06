/*
* Created by Steven Lee
* Date: 2021/4/3
* Time: 1:16
* Project: DIY
* */

class increasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

// const i = new IncreasingCounter()
// console.log(i.value)
