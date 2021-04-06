/*
* Created by Steven Lee
* Date: 2021/4/2
* Time: 23:54
* Project: DIY
* */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    executor(this.resolve, this.reject)
  };

  // 初始状态pending
  status = '11';

  // 成功之后的值
  value = null;
  // 失败之后的原因
  reason = null;


  // 使用箭头函数，this就能直接指向当前对象
  resolve = value => {
    // 只有状态是等待，才执行状态修改
    if (this.status === PENDING) {
      // 状态修改为成功
      this.status = FULFILLED;
      // 保存成功之后的值
      this.value = value;
    }
  }

  reject = reason => {
    if (this.status === PENDING) {
      // 状态成功为失败
      this.status = REJECTED;
      // 保存失败后的原因
      this.reason = reason;
    }

  }
}

module.exports = MyPromise
