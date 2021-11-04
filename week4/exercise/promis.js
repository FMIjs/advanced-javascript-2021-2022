
var promisStates = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
}

var handlerType = {
  CATCH: 'catch',
  THEN: 'then'
}

function Promis(fn) {
  this.value = null;
  this.state = promisStates.PENDING;
  this.handlers = [];

  function resolve(res) {
    this.state = promisStates.RESOLVED;
    while (this.handlers.length) {
      if (res instanceof Promis) {
        this.state = promisStates.PENDING;
        // #1 The following chunk is the most important one in our Promis ‼️
        res.then(function (finalRes) {
          return resolve.call(this, finalRes); // call self recursively
        }.bind(this)).catch(function (err) {
          return reject.call(this, err);
        }.bind(this))
        return;

        // pr#1 - - - - -         -
        // pr#2           - - - - 
      }

      var currThenable = this.handlers.shift();
      if (currThenable.type === handlerType.CATCH) { continue; }
      res = currThenable.fn(res);
    }
  }
  function reject(err) {
    this.state = promisStates.REJECTED;
    while (this.handlers.length) {
      if (err instanceof Promis) {
        this.state = promisStates.PENDING;
        // #2 The following chunk is the most important one in our Promis ‼️
        err.then(function (res) {
          return resolve.call(this, res);
        }.bind(this)).catch(function (finalErr) {
          return reject.call(this, finalErr);
        }.bind(this))
        return;
      }

      var currThenable = this.handlers.shift();
      if (currThenable.type === handlerType.THEN) { continue; }
      err = currThenable.fn(err);
    }
  }

  fn(resolve.bind(this), reject.bind(this));
}

Promis.prototype.then = function (fn) {
  this.handlers.push({ type: handlerType.THEN, fn });
}

Promis.prototype.catch = function (fn) {
  this.handlers.push({ type: handlerType.CATCH, fn });
}

// var promisTest = new Promis(function(resolve, reject) {
//   setTimeout(function(){
//     resolve('res');
//   },1000);
// });

// promisTest.then(function(result) {
//   console.log('result:', result);
//   return result + ' res';
// });
// promisTest.then(function(result) {
//   console.log('result:', result);
//   return result + ' res';
// });
// promisTest.then(function(result) {
//   console.log('result:', result);
//   return result + ' res';
// });
// promisTest.then(function(result) {
//   console.log('result:', result);
//   return result + ' res';
// });

// var chainedPromisTest = new Promis(function (resolve, reject) {
//   setTimeout(function () {
//     resolve('test');
//   }, 100);
// })
// chainedPromisTest.then(function (result) {
//   return new Promis(function (resolve) {
//     setTimeout(function () {
//       resolve(result + ' -- mest');
//     }, 100)
//   })
// })
// chainedPromisTest.then(function (finalRes) {
//   console.log(finalRes);
// });
// chainedPromisTest.then(function (finalFinalResWhichWillBeUndefined) {
//   return new Promis(function(resolve) {
//     setTimeout(function(){
//       resolve('actual final res')
//     }, 100)
//   })
// })
// chainedPromisTest.then(console.log); // <-- is it clear what we are doing here?
// chainedPromisTest.then(function() {
//   debugger; // <-- anchor, so we can see the results in the console
// })

var failingPromisTest = new Promis(function (_, reject) {
  setTimeout(function () {
    reject(new Error('some error'));
  }, 100)
});
failingPromisTest.then(function () { consol6e.log('wont come here'); })
failingPromisTest.catch(function (err) {
  console.error(err);
  return (new Promis(function (resolve, reject) {
    setTimeout(function () {
      resolve('res from error');
    }, 100)
  })).then(function (resFromError) {
    console.log(resFromError);
    debugger;
  })
})

