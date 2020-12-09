/*
* Created by Steven Lee
* Date: 2020/11/27
* Time: 10:49
* Project: DIY
* */
// const SelfPromise = (executor) => {
const fn = () => {
}
const SelfPromise = function (executor) {

  let _this = this
  _this.$state = 'pending' // pending resolve  reject
  _this.successCB = undefined
  _this.failCB = undefined

  const resolve = (params) => {
    if (_this.$state === 'pending') {
      _this.$state = 'resolve'
    }
  }
  const reject = (params) => {
    if (_this.$state === 'pending') {
      _this.$state = 'reject'
    }
  }

  executor(resolve.bind(_this), reject.bind(_this))
}

SelfPromise.prototype.then = function (full = fn, fail = fn) {
  this.successCB = full
  this.failCB = fail
  console.log('then')
  this.$state === 'resolve' ? this.successCB() : this.failCB()
}


new SelfPromise(function (res, rej) {
  setTimeout(_ => console.log('selfPromise 成功'), 3e3)
}).then(res => {
  console.log(res, 'selfPromise')

})
