// // MACRO TASKS AND MICRO TASKS
// // MACRO TASKS: 
// var fs = require('fs');

// function writeFileHandler(err) {
//   // Handle the ERROR (Always handle errors!)
//   if (err) { return console.error(err); }

//   console.log('File was modified!');
// }

// function readFileHandlerFactory(cb) {
//   return function readFileHandler(err, content) {

//     // Handle the ERROR (Always handle errors!)
//     if (err) { return console.error(err); }

//     if (cb) { cb(content); }
//   }
// }

// // CPS = Continuation Passing Style
// fs.readFile('./test.txt', readFileHandlerFactory(function (content) {
//   var modifiedContent = content + ' ' + content;
//   fs.writeFile('./test.txt', modifiedContent, writeFileHandler);
//   console.log('END OF READ FILE');
// }));

// setTimeout(function () {
//   console.log('TIMEOUT!');
// });

// // MICRO TASKS
// process.nextTick(function () {
//   console.log('HELLO');
// });

// console.log('END OF FILE');

// fs.writeFileSync('./test.txt', 'HELLO WORD!');
// console.log('FINISH');


// setTimeout(function () {
//   console.log('HELLO!');
// }, 0);
// IIFEs 
// var myLib = (function (global) {
//   var a = 10;

//   return {
//     calculate: function (b) {
//       return a + b;
//     }
//   };
// }(global));

// myLib.calculate();






// for (var i = 0; i < 5; i++) {
//   // (function (currentI) {
//   //   setTimeout(function () {
//   //     console.log(currentI);
//   //   }, 0);
//   // }(i));
//   // setTimeout(function (value) {
//   //   console.log(value)
//   // }, 0, i);
//   var sid = setTimeout(function (value) {
//     console.log(value);
//   }.bind(undefined, i), 0);

//   clearTimeout(sid);
// }

// (function () {
//   var i = 0;
//   var iid = setInterval(() => {
//     console.log('HELLO 2!');
//     if (i > 4) { clearInterval(iid); }
//     i++;
//   }, 4000);
// }());

// setTimeout(function () {
//   console.log('HELLO!');
// });

// Promise.resolve(1)
//   .then(function (x) {
//     return x + 1;
//   })
//   .then(function (x) {
//     return x + 2;
//   })
//   .then(console.log);

// console.log([1, 2, 3, 4]
//   .map(function (x) {
//     return x + 1;
//   })
//   .filter(function (x) {
//     return x % 2 === 0
//   }));


var fs = require('fs');

function readFile(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, content) {
      if (err) { return reject(err); }
      resolve(content);
    });
  });
}

function writeFile(path, content) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, content, function (err) {
      if (err) { return reject(err); }
      resolve(content);
    });
  });
}

function curry(fn) {
  return function helper() {
    var arity = fn.length;
    var args = [].slice.call(arguments);
    if (args.length === arity) {
      return fn.apply(undefined, args);
    }
    return function () {
      var allArgs = args.concat([].slice.call(arguments));
      return helper.apply(undefined, allArgs);
    }
  }
}

var cWriteFile = curry(writeFile);

function modifyContent(content) {
  return content + ' ' + content;
}
function logMessage(message, content) {
  console.log(message + content);
}

var cLogMessage = curry(logMessage);

// readFile('./tett.txt')
//   .catch(function (err) {
//     // if (err.code === 'ENOENT') { return 'EMPTY'; }
//     // return Promise.reject(err);
//     return readFile('test.txt').then(function (content) { return content + ' ---- ' + content; });
//   })
//   .then(modifyContent)
//   .then(cWriteFile('./tett.txt'))
//   .then(cLogMessage('File was successfully modified. The content is: '))
//   .catch(function (err) {
//     console.error(err);
//   });




function subscribeToChanges(filePath, cb) {
  function unsubscribe() { clearInterval(sid); }
  var sid = setInterval(function () {
    var lastLength = 0;
    console.log(unsubscribe);
    readFile(filePath).then(content => {
      if (content.length > lastLength) {
        lastLength = content.length;
        cb();
      }
    }).catch(err => {
      console.error(err);
      unsubscribe();
    });
  }, 3000);
  return unsubscribe;
}

var unSub = subscribeToChanges('./test.txt', function () {
  console.log('File was changed')
});

setTimeout(() => { unSub(); }, 6000);