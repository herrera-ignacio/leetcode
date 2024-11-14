function getAverages(nums: number[], k: number): number[] {
    const prefixSum = [...nums];
    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] = prefixSum[i] + prefixSum[i - 1];
    }

    const avgs = new Array(nums.length).fill(-1);

    for (let i = k; i < nums.length - k; i++) {
        avgs[i] = Math.floor((prefixSum[i + k] - prefixSum[i - k] + nums[i - k]) / (k * 2 + 1));
    }

    return avgs;
}