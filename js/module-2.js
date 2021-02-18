// Module 2
/* 
* By creating those functions were  
* used information from MDN Web Docs
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
* - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
*/
const randomInteger = function(min, max) {
  let response = {};

  if ( Number.isInteger(min) && Number.isInteger(max) ) {
    if (max - min <= 0) {
      response.type = 'error';
      response.content = '"Max" number cannot be equal to or less than "min" number. \nPlease, try again.';
    } else if (max < 0 || min < 0) {
      response.type = 'error';
      response.content = 'Numbers cannot be less than 0. \nPlease, try again.';
    } else {
      /* 
      * Next line was taken from 
      * https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
      */
      const number = Math.floor(Math.random() * (max - min + 1) + min);

      const text = 'Random number is: ';
      response.type = 'info';
      response.content = text + number;
    }
  
  } else {
    response.type = 'error';
    response.content = 'Please, enter numbers!';
  }

  return response;
};


const randomFloat = function(min, max, symbolsAfter = 1) {
  let response = {};

  if (symbolsAfter <= 0) symbolsAfter = 1;
  if ( !Number.isInteger(symbolsAfter) ) Math.floor(symbolsAfter);

  const newMin = +(min.toFixed(symbolsAfter));
  const newMax = +(max.toFixed(symbolsAfter));

  if ( !isNaN(newMin) 
    && !isNaN(newMax) 
    && !Number.isInteger(newMin) 
    && !Number.isInteger(newMax) ) {

    if (newMax - newMin <= 0) {
      response.type = 'error';
      response.content = '"Max" number cannot be equal to or less than "min" number. \nPlease, try again.';
    } else if (newMax < 0 || newMin < 0) {
      response.type = 'error';
      response.content = 'Numbers cannot be less than 0. \nPlease, try again.';
    } else {
      const number = (Math.random() * (newMax - newMin) + newMin).toFixed(symbolsAfter);
      const text = 'Random number is: ';

      response.type = 'info';
      response.content = text + number;
    }
  
  } else {
    response.type = 'error';
    response.content = 'Please, enter numbers!';
  }

  return response;
}

export { randomInteger, randomFloat };
