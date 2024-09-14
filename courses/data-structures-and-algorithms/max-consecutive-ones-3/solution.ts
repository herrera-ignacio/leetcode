// https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4595/
function longestOnes(nums: number[], k: number): number {
  let turnedZeroes = 0;
  let left = 0;
  let right = 0;
  for (; right < nums.length; right++) {
    if (nums[right] === 0) {
      turnedZeroes++;
    }
    // Once we've found a valid window size, we never shrink it
    // Instead we just keep moving it as a sliding window
    // If we manage to get turnedZeroes below k again,
    // the window will stop shrinking but will be able to expand
    if (turnedZeroes > k) {
      if (nums[left] === 0) {
        turnedZeroes--;
      }
      left++;
    }
  }
  return right - left;
};
