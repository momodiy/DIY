/*
* Created by Steven Lee
* Date: 2021/2/17
* Time: 17:57
* Project: DIY
* */

const obj = {
  has(val){
    console.log(val,'has')
  },
  getPrototypeOf(val) {
    console.log(val, '监听到读取代理对象原型链')
    return val
  }
}

const proxy = new Proxy({}, obj)

proxy.name = 1
console.log(proxy.name)
proxy.__proto__.q = 2
'b' in proxy
// console.log(proxy.__proto__)
