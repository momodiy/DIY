/*
* Created by Steven Lee
* Date: 2020/11/1
* Time: 20:26
* Project: DIY
* */

const path = require('path')
const fs = require('fs')
const vm = require('vm')

function customRequire(pathToModule) {
  const ptm = path.resolve(__dirname, pathToModule)
  let content = fs.readFileSync(ptm, 'utf-8')

  console.log(content)

  const funcWrapper = [
    '(function funcWrapper(require, module, exports,__dirname,__filename) {\n',
    '})'
  ]

  const result = `${funcWrapper[0]}${content}${funcWrapper[1]}`
  const script = new vm.Script(result)

  const func = script.runInContext()
  const m = {exports: {}}
  func(customRequire, m, m.exports)
  return result

}

customRequire('./module.js')
