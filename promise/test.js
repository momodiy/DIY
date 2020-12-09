/*
* Created by Steven Lee
* Date: 2020/11/23
* Time: 23:35
* Project: DIY
* */
const p1 = new Promise((resolve, reject) => reject())

const p2 = p1.then( function () {
  return 456
}, function () {
  return false
})

p2.then(
  (val) => {
    console.log(val)
    console.log('已完成')
  },
  (val) => {
    console.log(val)
    console.log('已拒绝')
  }
)
