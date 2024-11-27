const matching = {
  "(": ")",
  "{": "}",
  "[": "]"
}


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (const c of s) {
    if (c in matching) {
      // if char is opening
      stack.push(c);
    } else {
      if (!stack.length) {
        // no opening char
        return false;
      }

      const prevOpening = stack.pop();
      if (matching[prevOpening] !== c) {
        // must match prev opening char
        return false;
      }
    }
  }

  return !stack.length; // must be 0
};