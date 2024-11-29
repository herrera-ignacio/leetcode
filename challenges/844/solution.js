/**
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
  const build = str => {
    const stack = [];

    for (const c of str) {
      if (c !== "#") {
        stack.push(c);
      } else if (stack.length) {
        stack.pop();
      }
    }

    return stack.join("")
  }


  return build(s) === build(t);
};