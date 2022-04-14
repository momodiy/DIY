/*
* Created by Steven Lee
* Date: 2022/3/25
* Time: 13:57
* Project: DIY
* */

let obj = {id: '777'}
let key = 'name'

Object.defineProperty(obj, key, {
  // 默认false。 为true 该属性的描述符才能够被改变，同时该属性也能从对应的对象中删除
  configurable: true,
  // 默认false。 是否可枚举(设为false后, 遍历属性不会打印该属性)
  enumerable: false,
  // 默认false。是否可修改值
  // writable: true,
  // // 设置对应的属性值
  // value: 'Steven Lee',
  
  get (val) {
    console.log(val, 'get')
    return val ? val + '333' : '666'
  },
  set (val) {
    console.log(val, 'set')
    // obj.name = val
    // return val + '--'
    return 666
  }
})

console.log(obj)

// obj.name = 'Lee'
// console.log(obj)

// for (const v in obj) {
//   console.log(v)
// }

// console.log(obj.name)
obj.name = 998
// console.log(obj)

console.log('aha')
obj.name = []
console.log(obj.name, '???')
obj.name[0] = 666
obj.name[1] = 666
