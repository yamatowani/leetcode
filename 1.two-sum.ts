/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] | undefined {
  const numMap: Record<number, number> = {}
  for (let i =0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (complement in numMap)
      return [numMap[complement], i]
    numMap[nums[i]] = i
  }
};
// @lc code=end

