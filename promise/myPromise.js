/*
* Created by Steven Lee
* Date: 2021/4/3
* Time: 0:56
* Project: DIY
* */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


// 新建 MyPromise 类
class MyPromise {

  constructor(executor) {
    // executor 是一个执行器，进入会立即执行
    // 并传入resolve和reject方法
    executor(this.resolve, this.reject)

  }

  onFulfilledCallbacks = []
  onRejectedCallbacks = []

  status = PENDING;
  // 储存状态的变量，初始值是 pending

  // resolve和reject为什么要用箭头函数？
  // 如果直接调用的话，普通函数this指向的是window或者undefined
  // 用箭头函数就可以让this指向当前实例对象
  // 成功之后的值
  value = null;
  // 失败之后的原因
  reason = null;

  // 更改成功后的状态
  resolve = (value) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态修改为成功
      this.status = FULFILLED;
      // 保存成功之后的值
      this.value = value;
      while (this.onFulfilledCallbacks.length) {
        // Array.shift() 取出数组第一个元素，然后（）调用，shift不是纯函数，取出后，数组将失去该元素，直到数组为空
        this.onFulfilledCallbacks.shift()(value)
      }
    }
  }

  // 更改失败后的状态
  reject = (reason) => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态成功为失败
      this.status = REJECTED;
      // 保存失败后的原因
      this.reason = reason;
      // 判断失败回调是否存在，如果存在就调用
      // this.onRejectedCallback && this.onRejectedCallback(reason)
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reason)
      }
    }
  }

  then(onFulfilled, onRejected) {
    // 判断状态
    if (this.status === FULFILLED) {
      // 调用成功回调，并且把值返回
      onFulfilled(this.value);
    } else if (this.status === REJECTED) {
      // 调用失败回调，并且把原因返回
      onRejected(this.reason);
    } else if (this.status === PENDING) {

      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);

      // this.onFulfilledCallback = onFulfilled;
      // this.onRejectedCallback = onRejected;
    }
  }
}

const promise = new MyPromise((resolve, reject) => {
  resolve('success')
  reject('err')
})


module.exports = MyPromise

