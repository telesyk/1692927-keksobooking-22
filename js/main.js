/* Main.js */
import { randomInteger, randomFloat } from './module-2.js';

/* 
* Planing in future to extend or adopt this function to show alert messages like pop-up's
*/
const displayMessage = res => {
  if (res.type == 'error') alert('Error!\n' + res.content);
  if (res.type == 'warn') alert('Caution!\n' + res.content);
  if (res.type == 'info') alert('Info\n' + res.content);
};

displayMessage( randomInteger(29, 27) );
displayMessage( randomFloat(1.11, 1.12, 1) );
