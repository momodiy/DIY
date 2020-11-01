/*
* Created by Steven Lee
* Date: 2020/9/30
* Time: 10:00
* Project: DIY
* */

const flatten = arr =>
  arr.reduce((prev, item) =>
      prev.concat(Array.isArray(item)
        ? flatten(item)
        : item)
    , [])


let arr = [[1, 2], [3, 4], [5, [5, 6, 7, 8, 8,], [4, 5, 6, 7]], [8, [9, [10]]]]
console.log(flatten(arr))
