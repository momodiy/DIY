/*
* Created by Steven Lee
* Date: 2021/1/12
* Time: 0:49
* Project: DIY
* */

let obj = {}
let value
Object.defineProperty(obj, 'arr', {
  get() {
    return value
  },
  set(val) {
    console.log('set',val)
    value = val
  }
})


obj.arr = [1,2,3,4,5]

console.log(obj.arr,99)

obj.arr[1] = 888 // 未监听到


