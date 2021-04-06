/*
* Created by Steven Lee
* Date: 2020/11/23
* Time: 23:35
* Project: DIY
* */
const MyPromise = require('../promise/MyPromise')
const promise = new MyPromise((resolve, reject) => {
  resolve('success')
  reject('err')
})

promise.then(value => {
  console.log('resolve', value)
}, reason => {
  console.log('reject', reason)
})
