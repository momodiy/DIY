/*
* Created by Steven Lee
* Date: 2022/3/25
* Time: 17:24
* Project: DIY
* */

var trailingZeroes = function(n) {
  let ten = 0
  while(n>4) {
    if (!(String(n).slice(-1) % 5)) {
      let m = n
      while((!(String(m).slice(-1) % 5)) && m > 4) {
        ten++
        m/=5
      }
      n-=5
    }
    n--
  }
  return ten
}
console.log(trailingZeroes(30))
