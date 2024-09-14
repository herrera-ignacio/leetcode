// https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/703/arraystrings/4594/
function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  let maxAvg = -Infinity;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  maxAvg = Math.max(maxAvg, sum / k);

  for (let i = k; i < nums.length; i++) {
    sum -= nums[i - k];
    sum += nums[i];
    maxAvg = Math.max(maxAvg, sum / k);
  }

  return maxAvg;
};
