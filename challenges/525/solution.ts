function findMaxLength(nums: number[]): number {
    const counts = new Map();
    counts.set(0, -1);

    let count = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        count += nums[i] === 0 ? -1 : 1;
        if (counts.has(count)) {
            maxLength = Math.max(maxLength, i - counts.get(count));
        } else {
            counts.set(count, i)
        }
    }

    return maxLength;
}