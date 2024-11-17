function minimumCardPickup(cards: number[]): number {
    const cardsMap = new Map();
    let ans = Number.MAX_VALUE;
    for (let i = 0; i < cards.length; i++) {
        if (cardsMap.has(cards[i])) {
            ans = Math.min(ans, i - cardsMap.get(cards[i]) + 1)
        }
        cardsMap.set(cards[i], i)
    }

    return ans === Number.MAX_VALUE ? -1 : ans;
};