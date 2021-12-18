import { myFunction, test } from './best.js'; // static import
import myVariable from './best.js'; // static default import

function loadModule(modulePath) {
  return import(modulePath).then(m => m) // dynamic import
}

console.log(myFunction(1, 2), test, myVariable);