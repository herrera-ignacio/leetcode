function canConstruct(ransomNote: string, magazine: string): boolean {
    const charCount = new Map();
    for (const char of magazine) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    for (const char of ransomNote) {
        if (!charCount.has(char) || charCount.get(char) <= 0) {
            return false;
        } else {
            charCount.set(char, charCount.get(char) - 1);
        }
    }
    return true;
};