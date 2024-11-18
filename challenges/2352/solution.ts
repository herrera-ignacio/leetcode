function convertToKey(arr: number[]): string {
    return arr.join(',');
}

function equalPairs(grid: number[][]): number {
    const rows = new Map();

    for (const row of grid) {
        const key = convertToKey(row);
        rows.set(key, (rows.get(key) || 0) + 1);
    }

    const cols = new Map();
    for (let col = 0; col < grid[0].length; col++) {
        const colNums = [];
        for (let row = 0; row < grid.length; row++) {
            colNums.push(grid[row][col])
        }
        const key = convertToKey(colNums);
        cols.set(key, (cols.get(key) || 0) + 1);
    }

    let ans = 0;
    for (const [row, val] of rows) {
        ans += val * cols.get(row) || 0;
    }

    return ans;
};