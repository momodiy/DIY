/*
* Created by Steven Lee
* Date: 2022/4/14
* Time: 16:26
* Project: DIY
* Description: 节流
* */

// 节流 一段时间内只触发一次
const throttle = (fn, delay = 5e2) => {
  let flag = null
  return function () {
    if (flag) return
    flag = setTimeout(() => {
      fn.apply(this, arguments)
      flag = null // 执行完成清空flag，可以进入下一次循环
    }, delay)
  }
}

// 防抖
const debounce = (fn, delay) => {
  let timeout = null
  clearTimeout(timeout)
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(fn, arguments)
    }, delay)
  }
}
