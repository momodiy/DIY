/*
* Created by Steven Lee
* Date: 2019/4/1
* Time: 23:03
* Project: DIY
* */

const add = (...a) =>
  a.length === 1
    ? (b) => b + a[0]
    : eval(a.join("+"))

console.log(add(1, 2));
console.log(add(1)(3));
