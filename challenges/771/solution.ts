function numJewelsInStones(jewels: string, stones: string): number {
    const jewelsMap = new Map(jewels.split("").map((j: string) => [j, true]));
    let ans = 0;
    for (const stone of stones) {
        if (jewelsMap.has(stone)) {
            ans++;
        }
    }
    return ans;
};