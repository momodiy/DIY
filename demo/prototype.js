/*
* Created by Steven Lee
* Date: 2020/6/26
* Time: 16:41
* Project: DIY
* */

function Supermarket() {

}
// Supermarket.name= 'Steven' // 构造函数上的属性


Supermarket.prototype.product = "口罩"

function Shop() {

}

Shop.prototype = new Supermarket()

// 默认person.__proto__ === Shop.prototype
var person = new Shop()
console.log(person.product)

// 示例首先查看自己的属性
// 通过proto向上查找
