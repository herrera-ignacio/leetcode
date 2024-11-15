function missingNumber(nums: number[]): number {
    let res = (nums.length * (nums.length + 1)) / 2;
    for (const num of nums) {
        res -= num;
    }
    // The number missing to subtract is the answer
    return res;
};