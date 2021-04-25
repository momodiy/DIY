/*
* Created by Steven Lee
* Date: 2021/4/24
* Time: 21:53
* Project: DIY
* */
console.log('1');

setTimeout(function() {
  console.log('2');
  process.nextTick(function() {
    console.log('3');
  })
  new Promise(function(resolve) {
    console.log('4');
    resolve();
  }).then(function() {
    console.log('5')
  })
})

process.nextTick(function() {
  console.log('6');
})

new Promise(function(resolve) {
  console.log('7');
  resolve();
}).then(function() {
  console.log('8')
})

setTimeout(function() {
  console.log('9');
  process.nextTick(function() {
    console.log('10');
  })
  new Promise(function(resolve) {
    console.log('11');
    resolve();
  }).then(function() {
    console.log('12')
  })
})

/***
 * FIXME 第一轮宏任务 console、process.nextTick、Promise (三个微任务)进入主进程执行
 * FIXME 三个微任务中Event Queue, nextTick和promise.then依次执行 因此当前执行顺序为 1768
 * FIXME 两个
  */


// 第一轮宏任务 console、process.nextTick、Promise进入主进程执行
// 2 4 9 11 3 5 10 12
// 2 4 3 5 9 11 10 12
