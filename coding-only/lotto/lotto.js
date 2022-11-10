export function randomLottoTicket() {
  /* Return an array of 6 random numbers.
  The numbers should be between 1 and 49 (1 and 49 are included in the range). 
  Duplicate numbers are not allowed. 
  Calling the function twice should not return the same numbers.*/
  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function isDuplicate(n, arr) {
    return arr.includes(n);
  }
  function addNumber(n, arr) {
    arr.push(n);
  }
  let arr = [];
  while (arr.length < 6) {
    let number = generateRandomNumber(1, 49);
    let checkForDuplicate = isDuplicate(number, arr);
    if (!checkForDuplicate) {
      addNumber(number, arr);
    }
  }
  return arr;
}
