/*
* Created by Steven Lee
* Date: 2020/6/26
* Time: 23:34
* Project: DIY
* */

function Person() {


console.log(Person.prototype.constructor === Person) // true


Person.prototype = {
  name: 'Steven Lee',
  age: 30,
  sayHello: function () {
    console.log('Hello ~~')
  }
}
console.log(Person.prototype.constructor === Person) // false

// 默认一个对象的prototype.constructor等于它本身。
// 对象的prototype可以重新赋值,它的constructor将不再指向Person

// 可以手动将 Person.prototype.constructor 指回它本身
Person.prototype.constructor = Person
console.log(Person.prototype.constructor === Person)

