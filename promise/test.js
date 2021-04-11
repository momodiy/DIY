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
  // setTimeout(() => {
    resolve('success self')
  // }, 1e3);
})

const p1 = promise.then(value => {
  console.log(value)
  throw new Error('执行器错误')
  return p1
})


// multi-then test

function other() {
  return new MyPromise((resolve, reject) => {
    console.log('other resolve')
    resolve('other')
  })
}

// promise.then(value => {
//   console.log(1)
//   console.log('resolve', value)
//   return other()
// })
//
// promise.then(value => {
//   console.log(2)
//   console.log('resolve', value)
// })
//
// promise.then(value => {
//   console.log(3)
//   console.log('resolve', value)
// })
