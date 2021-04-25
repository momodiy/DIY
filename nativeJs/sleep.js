/*
* Created by Steven Lee
* Date: 2021/4/25
* Time: 23:13
* Project: DIY
* */

function sleep(duration){
  return new Promise(function(resolve){
    setTimeout(resolve, duration);
  })
}

function sleep1() {
  let ts = +new Date
  while( Date.now() < (ts+3e3)){}
  console.log('await final')
}
sleep1()
// sleep(3e3).then(()=>{
// console.log('final')
// })
