/*
* Created by Steven Lee
* Date: 2020/12/29
* Time: 23:59
* Project: DIY
* */

const isFunction = fn => typeof fn === "function"

/**
 * 模拟call实现步骤
 *  1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可 能出现使用 call 等方式调用的情况。
 *  2.判断传入上下文对象是否存在，如果不存在，则设置为 window 。
 *  3.处理传入的参数，截取第一个参数后的所有参数。
 *  4.将函数作为上下文对象的一个属性。
 *  5.使用上下文对象来调用这个方法，并保存返回结果。
 *  6.删除刚才新增的属性。
 *  7.返回结果。
 * */

Function.prototype.mycall = function (ctx) {
if(!isFunction(this)) return

  let args = [...arguments].slice(1)
  let result
  ctx = ctx || window

  ctx.fn = this

  result = ctx.fn(...args)
  delete ctx.fn
  return result
}
/**
 * 模拟apply实现步骤
 *  1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可 能出现使用 call 等方式调用的情况。
 *  2.判断传入上下文对象是否存在，如果不存在，则设置为 window 。
 *  3.将函数作为上下文对象的一个属性。
 *  4.判断参数值是否传入
 *  4.使用上下文对象来调用这个方法，并保存返回结果。
 *  5.删除刚才新增的属性
 *  6.返回结果
 * */

Function.prototype.myapply = function (ctx) {
  if(!isFunction(this)) return
  let args = arguments[1]
  let result
  ctx = ctx || window

  ctx.fn = this

  result = ctx.fn(args || null)
  delete ctx.fn
  return result
}

/**
 * 模拟bind实现步骤
 *  1.判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可 能出现使用 call 等方式调用的情况。
 *  2.保存当前函数的引用，获取其余传入参数值。
 *  3.创建一个函数返回
 *  4.函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的 情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传 入指定的上下文对象。
 * */

Function.prototype.mybind = function (ctx) {
  if(!isFunction(this)) return

  let args = [...arguments].slice(1)
  let fn = this

  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    )
  }
}
