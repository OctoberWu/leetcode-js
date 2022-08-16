/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const myObject = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (myObject.hasOwnProperty(complement)) {
      return [myObject[complement], i];
    }
    myObject[nums[i]] = i;
  }
};


// console.log(twoSum([1, 2, 3, 4, 5, 6], 4));
/**
 * 1. make the complement
 * 2. use array to check whether the complement does exist.
 * 3. return the combination
 * note: if not exist, make a record. make a copy of the iterated ones.
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

console.log(ListNode(undefined));