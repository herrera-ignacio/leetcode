function groupAnagrams(strs: string[]): string[][] {
    const groups = new Map();

    for (let str of strs) {
        const key = str.split("").sort().join("");
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(str);
    }

    let ans = [];
    for (const group of groups.values()) {
        ans.push(group);
    }

    return ans;
};