/*
* Created by Steven Lee
* Date: 2021/3/1
* Time: 23:57
* Project: DIY
* */

const sortedSquares = nums => {
  // 不考虑进阶的解法一
  // return nums.map(v => v ** 2).sort((a, b) => a - b)

  let [start, end, result] = [0, nums.length - 1, Array(nums.length)]
  for (let i = 0; i < nums.length; i++) {
    const [s, e] = [nums[start] ** 2, nums[end] ** 2]
    if (s > e) {
      result[nums.length - i - 1] = s
      start++
    } else {
      result[nums.length - i - 1] = e
      end--
    }
  }
  return result
}


console.log(sortedSquares([-4, -1, 0, 3, 10]))
