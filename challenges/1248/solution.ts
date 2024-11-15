function numberOfSubarrays(nums: number[], k: number): number {
    // tracks how many times a prefix odd numbers count appears
    const counts = new Map();
    counts.set(0, 1);
    // track prefix of odd numbers count
    let curr = 0;
    let ans = 0;

    for (const num of nums) {
        curr += num % 2;
        ans += counts.get(curr - k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1);
    }

    return ans;
};