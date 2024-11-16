function maxNumberOfBalloons(text: string): number {
    const counts = { b: 0, a: 0, l: 0, o: 0, n: 0 };
    for (const char of text) {
        counts[char] = counts[char] + 1;
    }
    return Math.min(counts.b, counts.a, Math.floor(counts.l / 2), Math.floor(counts.o / 2), counts.n);
};