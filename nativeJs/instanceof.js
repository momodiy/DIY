/*
* Created by Steven Lee
* Date: 2021/4/9
* Time: 10:18
* Project: DIY
* */

function myInstanceof(L, R) { //L是表达式左边，R是表达式右边
  const O = R.prototype;
  L = L.__proto__;
  while (true) {
    if (L === null) { // 找到原型链最顶层null还没找到？直接返回false
      return false;
    }
    if (L === O) {// 这里重点：当 L 严格等于 0 时，返回 true
      return true;
    }

    L = L.__proto__;
  }
}

console.log(myInstanceof('nice', String)) // true
console.log(myInstanceof(222, String)) // false
