/*
* Created by Steven Lee
* Date: 2021/4/1
* Time: 1:53
* Project: DIY
* */

function nio(leftValue, rightValue) {
  if (rightValue === null) {
    return new TypeError('Right-hand side of \'instanceof\' is not an object')
  }
  let rightProto = rightValue.prototype; // 取右表达式的 prototype 值
  leftValue = leftValue.__proto__; // 取左表达式的__proto__值
  while (true) {
    console.log(leftValue, rightValue)
    if (leftValue === null) {
      return false;
    }
    if (leftValue === rightProto) {
      return true;
    }
    leftValue = leftValue.__proto__
  }
}

function nnio(l, r) {
  if (r === null) {
    return TypeError('Right-hand side of \'instanceof\' is not an object')
  }

  l = l.__proto__

  while (true) {
    if (l === null) return false

    if (r.prototype === l) return true

    l = l.__proto__

  }
}
