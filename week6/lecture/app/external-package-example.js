const { promisify } = require('@google-cloud/promisify');

/**
 * This is a very basic example function that accepts a callback.
 */
function someCallbackFunction(name, callback) {
  if (!name) {
    callback(new Error('Name is required!'));
  } else {
    callback(null, `Well hello there, ${name}!`);
  }
}

// let's promisify it!
const somePromiseFunction = promisify(someCallbackFunction);

function quickstart() {
  somePromiseFunction('nodestronaut')
    .then(([result]) => { console.log(result); })
}

// async function quickstart() {
//   // now we can just `await` the function to use it like a promisified method
//   const [result] = await somePromiseFunction('nodestronaut');
//   console.log(result);
// }
quickstart();