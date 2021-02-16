/* Main.js */

const displayMessage = res => {
  const style = {
    err: 'background-color: #ff003c',
    warn: 'background-color: yellow; color: black',
    info: 'background-color: blue',
  };

  if (res.type == 'error') console.log('%c Error! ', style.err, res.content);
  if (res.type == 'warn') console.log('%c Caution! ', style.warn, res.content);
  if (res.type == 'info') console.log('%c Info ', style.info, res.content);
};

// Module 2
const randomInteger = (min, max) => {
  let response = {};

  if ( Number.isInteger(min) && Number.isInteger(max) ) {
    if (max - min <= 0) {
      response.type = 'error';
      response.content = '"Max" number cannot be equal to or less than "min" number. Please, try again.';
    } else if (max < 0 || min < 0) {
      response.type = 'error';
      response.content = 'Numbers cannot be less than 0. Please, try again.';
    } else {
      /* 
      * This line was taken from 
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
displayMessage( randomInteger(25, 27) );


const randomFloat = (min, max, symbolsAfter = 1) => {
  let response = {};

  if (symbolsAfter <= 0) symbolsAfter = 1;

  const newMin = +(min.toFixed(symbolsAfter));
  const newMax = +(max.toFixed(symbolsAfter));

  if ( !isNaN(newMin) 
    && !isNaN(newMax) 
    && !Number.isInteger(newMin) 
    && !Number.isInteger(newMax) ) {

    if (newMax - newMin <= 0) {
      response.type = 'error';
      response.content = '"Max" number cannot be equal to or less than "min" number. Please, try again.';
    } else if (newMax < 0 || newMin < 0) {
      response.type = 'error';
      response.content = 'Numbers cannot be less than 0. Please, try again.';
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

displayMessage( randomFloat(1.11, 1.12, 2) );
