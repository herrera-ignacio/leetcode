// https://leetcode.com/problems/running-sum-of-1d-array/description/
function runningSum(nums: number[]): number[] {
    const prefix = [...nums];
    for (let i = 1; i < prefix.length; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }
    return prefix;
}