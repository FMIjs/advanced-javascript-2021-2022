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

function singleParamCurry(fn) {
  var allArgs = [];
  var arity = fn.length;
  return function helper(param) {
    allArgs.push(param);
    if (allArgs.length === arity) {
      return fn.apply(undefined, allArgs);
    }
    return function (param2) {
      return helper.call(undefined, param2);
      // return helper.bind(undefined)(param2);
    }
  }
}

function sum(a, b) { return a + b; }
function sum4(a, b, c, d) { return sum(sum(a, b), sum(c, d)); }


// var singleParamCurrySum = singleParamCurryStoringDataInContext(sum4);
// console.log(singleParamCurrySum(1)(2)(3)(4));


// console.log(curry(sum)(1)(3));
// console.log(curry(sum4)(1)()(3, 4)(5));

// var sum4With1and2AsBoundArguments = sum4.bind(undefined, 1, 2);
// console.log(sum4StartingWith1and2(3,4));
