/* The function should return an object giving hints about the passed password. 
The hints are stored in an object with the keys length, hasNumbers, hasCharacters.
    const result1 = analyzePassword("abc");
    // { length: 3, hasNumbers: false, hasCharacters: true }
    const result2 = analyzePassword("abc123");
    // { length: 6, hasNumbers: true, hasCharacters: true }
    const result3 = analyzePassword("1234");
    // { length: 4, hasNumbers: true, hasCharacters: false } */

export function analyzePassword(password) {
  function checkLength(password) {
    return password.length;
  }
  function hasNumbers(password) {
    return /\d/.test(password);
  }
  function hasCharacters(password) {
    return /[a-zA-Z]+/g.test(password);
  }
  return {
    length: checkLength(password),
    hasNumbers: hasNumbers(password),
    hasCharacters: hasCharacters(password),
  };
}
