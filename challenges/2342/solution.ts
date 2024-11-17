function getDigitSum(num: number) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}

function maximumSum(nums: number[]): number {
    const dic = new Map();
    let ans = -1;
    for (const num of nums) {
        const digitSum = getDigitSum(num);
        if (dic.has(digitSum)) {
            ans = Math.max(ans, num + dic.get(digitSum));
        }
        dic.set(digitSum, Math.max((dic.get(digitSum) || 0), num));
    }
    return ans;
};