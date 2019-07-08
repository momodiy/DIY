/*
* Created by Steven Lee
* Date: 2019/4/1
* Time: 23:10
* Project: DIY
* */

let target = 9
let nums = [1, 3, 222, 4, 2, 7, 11, 15]

// let result
// nums.find((num, index) => {
//     if(left = ~nums.findIndex(v => v === target - num)) return result=[index,~left]
// })
//
// console.log(result);

const targetArr = (nums, target) => {
  let result
  nums.find((num, index) => {
    if (left = ~nums.findIndex(v => v === target - num)) return result = [index, ~left]
  })

  console.log(result);
}

targetArr(nums, target)

var twoSum = function(nums, target) {
  for(let i= 0; i<nums.length; i++){
    for(let j= i+1; j<nums.length; j++){
      if(nums[j]+nums[i]===target){
        return [i,j]
      }
    }
  }
};

console.log(twoSum(nums, target));
