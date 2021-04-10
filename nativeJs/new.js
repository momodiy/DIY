/*
* Created by Steven Lee
* Date: 2021/4/10
* Time: 17:28
* Project: DIY
* */

function objectFactory(fn, ...args) {

  if (typeof fn !== 'function') {
    throw '第一个参数必须是函数'
  }

  // 创建一个对象
  const obj = {}

  // 让该对象可以访问构造函数原型链上的属性
  obj.__proto__ = fn.prototype;

  // 获取构造函数运行返回的结果
  let res = fn.apply(obj, args)

  // 当res为引用类型（复杂对象）则直接返回该结果; 否则返回obj，也就是构造函数中的this
  return typeof res === 'object' ? res || obj : obj
}

function PersonFactory(name, age) {
  this.name = name
  this.age = age
}

const people = new PersonFactory('Steven',  '20')

console.log(people)

const p1 = objectFactory(PersonFactory,  'Steven',  '20')
console.log(p1)
