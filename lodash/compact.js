/*
* Created by Steven Lee
* Date: 2020/6/26
* Time: 1:11
* Project: DIY
* */
// const _ = require('../node_modules/lodash');

const validateArr = ['123', 0, null, NaN, undefined]
console.log(validateArr, typeof validateArr)

const noFalsy = arr => arr.filter(v => !!v)
const noFalsy1 = arr => arr.filter(Boolean)

const compact = arr => {
  let resIndex = 0
  const result = []

  if (arr == null) {
    return result
  }

  for (const value of arr) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

console.time()

noFalsy(validateArr)

console.timeEnd()

console.time()

noFalsy1(validateArr)

console.timeEnd()


console.time()

compact(validateArr)

console.timeEnd()
