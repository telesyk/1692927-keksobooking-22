/* Module 2 -> https://up.htmlacademy.ru/javascript/22/tasks/2
* By creating those functions were  
* used information from MDN Web Docs
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
*/
const randomInteger = function(min, max, isFloat = false) {
  if (max - min <= 0) {
    return '"Max" number cannot be equal to or less than "min" number. Try again.';
  }
  if (max < 0 || min < 0) {
    return 'Numbers cannot be less than 0. Try again.';
  }
  /* 
  * The idea of random numbers were borrowed from
  * https://www.geeksforgeeks.org/lodash-_-random-method/ -> https://github.com/lodash/lodash/blob/master/random.js
  * and
  * https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  */
  if (!isFloat) return Math.floor(min + Math.random() * (max - min + 1));
  
  return min + Math.random() * (max - min);
};


const randomFloat = function(min, max, symbolsAfter = 1) {
  return randomInteger(min, max, true).toFixed(symbolsAfter);
}

export { randomInteger, randomFloat };
