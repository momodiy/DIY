/*
* Created by Steven Lee
* Date: 2021/4/12
* Time: 1:57
* Project: DIY
* */

// 原型链继承
// function Animal() {}
//
// function Dog() {}
//
// Dog.prototype = new Animal()

// 构造函数继承
// function Animal1(name) {}
//
// function Dog1(name) {
//   Animal1.call(this, name)
// }
//
// Dog1.prototype = new Animal1()

// function Animal(name) {
//   this.name = name
//   this.getName = function () {
//     return this.name
//   }
// }
//
// function Dog(name) {
//   Animal.call(this, name)
// }
//
// function Cat(name) {
//   Animal.call(this, name)
// }
//
// Dog.prototype = new Animal()
//
// let dog1 = new Dog('泰迪')
// dog1.name = '22222'
// let dog2 = new Dog('萨摩耶')
// console.log(dog1)
//
// console.log(dog1.getName())
// console.log(dog2.getName())
// console.log(dog1,222)


function Animal2(name) {}

function Dog2(name) {
  Animal2.call(this, name)
}

Dog2.prototype = new Animal2()
Dog2.prototype.constructor = Dog2


function F() {}
F.prototype = o
let prototype = object(parent.prototype)
prototype.constructor = child
