/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const numMap = new Map<string, number>([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])
  let result = 0
  for (let i = 0; i< s.length; i++) {
    const currentNum = numMap.get(s[i])!
    const nextNum    = numMap.get(s[i + 1]) || 0
    if (currentNum < nextNum) {
      result -= currentNum
    } else {
      result += currentNum
    }
  }
  return result
};
// @lc code=end

