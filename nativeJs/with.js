/*
* Created by Steven Lee
* Date: 2020/12/29
* Time: 1:44
* Project: DIY
* */
let o = {a: '111', b: '22'}

with (o) {
  a = '33',
    b = '44',
    c = 'nice'
}

console.log(o)
// with memory leak
console.log(c)
// setTimeout('console.log(4444)',3e3)
