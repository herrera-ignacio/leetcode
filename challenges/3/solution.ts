function lengthOfLongestSubstring(s: string): number {
    const counts = new Map();
    let ans = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (counts.has(s[right])) {
            counts.delete(s[left]);
            left++;
        }
        counts.set(s[right], true);

        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};