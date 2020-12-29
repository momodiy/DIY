/*
* Created by Steven Lee
* Date: 2020/12/30
* Time: 0:20
* Project: DIY
* */
// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术

// github issues 另一种解读 用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数
// 当bind的第一个参数为null或undefined，执行作用域的 this 将被视为新函数的 thisArg
const curry = (fn, ...args) => fn.length <= args.length // 判断参数的数量足够执行函数
  ? fn(...args) // 执行函数
  : curry.bind(null, fn, ...args) // 使用bind的返回了暂存参数的函数

function sum(a, b, c) {
  return a + b + c
}

let c1 = curry(sum, 100)
let c2 = curry(c1,200)
console.log(c2(250), 'c2')
console.log(c1(200, 300))

/**
 *  不定长累加的累加实现（其实）
 *  顺便解释一下方法里面用到的valueOf方法
 *    如果存在任意原始值，它就默认将对象转换为表示它的原始值；
 *    对象是复合值，而大多数对象无法真正表示为一个原始值，因此默认的valueOf()方法简单地返回对象本身
 * */

const add = sum => {
  const fn = n => add(n + sum)

  fn.valueOf = () => sum

  return fn;
}

add(1)() // Function
~add(1) // 1
~add(1)(2) // 3
~add(1)(2)(3) // 5

// 支持多个参数不定长的累加实现
const multiAdd = (...param) => {
  const addSum = param.reduce((prev, next) => prev + next)
  const fn = (...args) => {
    const sum = args.reduce((prev, next) => prev + next)
    return add(addSum + sum)
  }
  fn.valueOf = () => addSum
  return fn
}

console.log(+multiAdd(1)(1, 1, 1)(1)) // 5
console.log(+multiAdd(1)(2)(3, 4)) // 10
