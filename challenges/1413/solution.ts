// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/description/
function minStartValue(nums: number[]): number {
    const prefixSum = [...nums];
    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] = prefixSum[i] + prefixSum[i - 1];
    }
    const minVal = Math.min(...prefixSum);
    return (minVal < 0) ? minVal * -1 + 1 : 1;
}