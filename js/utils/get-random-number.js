/* Module 2 -> https://up.htmlacademy.ru/javascript/22/tasks/2
*/
const randomInteger = function(min, max, isFloat = false) {
  if (max - min <= 0) {
    return '"Max" number cannot be equal to or less than "min" number. Try again.';
  }
  
  if (max < 0 || min < 0) {
    return 'Numbers cannot be less than 0. Try again.';
  }

  if (!isFloat) return Math.floor(min + Math.random() * (max - min + 1));
  
  return min + Math.random() * (max - min);
};


const randomFloat = function(min, max, symbolsAfter = 1) {
  return randomInteger(min, max, true).toFixed(symbolsAfter);
}

export { randomInteger, randomFloat };
