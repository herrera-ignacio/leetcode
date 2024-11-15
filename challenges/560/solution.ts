const subarraySum = (nums, k) => {
    const counts = new Map();
    // tracks how many times a prefix sum appears
    counts.set(0, 1);
    // tracks current prefix sum
    let curr = 0;
    let ans = 0;

    for (const num of nums) {
        curr += num;
        ans += counts.get(curr - k) || 0;
        counts.set(curr, (counts.get(curr) || 0) + 1);
    }

    return ans;
}