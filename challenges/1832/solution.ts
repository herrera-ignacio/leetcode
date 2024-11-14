function checkIfPangram(sentence: string): boolean {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const alphabetMap = new Map(alphabet.map(c => [c, false]));

  for (const char of sentence) {
    alphabetMap.set(char, true);
  }

  for (const [_char, isFound] of alphabetMap) {
    if (!isFound) return false;
  }

  return true;
};