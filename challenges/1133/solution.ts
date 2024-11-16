function largestUniqueNumber(nums: number[]): number {
  const counts = new Map();
  for (const num of nums) {
      counts.set(num, (counts.get(num) || 0) + 1);
  }

  let ans = -1;
  [...counts].forEach(([num, count]) => {
      if (count === 1) {
          ans = Math.max(ans, num);
      }
  });

  return ans;
}