function countElements(arr: number[]): number {
    const elements = new Set(arr);
    let res = 0;
    arr.forEach(num => {
        if (elements.has(num + 1)) {
            res++;
        }
    })
    return res;
};