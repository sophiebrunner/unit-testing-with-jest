export function doubleCharacters(word) {
  /* Double each character in a given string.
Examples: 
const result1 = doubleCharacters("abc");
// "aabbcc"
const result2 = doubleCharacters("Abc");
// "AAbbcc"
const result3 = doubleCharacters("Hallo Welt");
// "HHaalllloo  WWeelltt" */
  let arr = word.split("");
  return arr.map((character) => character + character).join("");
}
