/*
* Created by Steven Lee
* Date: 2020/11/23
* Time: 23:35
* Project: DIY
* */
const MyPromise = require('../promise/MyPromise')
// const promise = new MyPromise((resolve, reject) => {
//   resolve('success')
//   reject('err')
// })
//
// promise.then(value => {
//   console.log('resolve', value)
// }, reason => {
//   console.log('reject', reason)
// })

// asynchronous test
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 2000);
})

promise.then(value => {
  console.log('resolve', value)
}, reason => {
  console.log('reject', reason)
})
