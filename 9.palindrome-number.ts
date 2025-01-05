/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) {
      return false
    }
    const strX = String(x)
    for (let i = 0; i < strX.length; i++) {
      if (strX[i] === strX[strX.length - 1 - i]) {
        continue
      }
      return false
    }
    return true
};
// @lc code=end

