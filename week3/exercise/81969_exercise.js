
var sum = function (x, y) { return x + y; }

// var memoize = function (fn) {
//     var memoDict = {};
//     return function () {
//         var key = '';
//         for (var prop in arguments) {
//             key += arguments[prop];
//         }
//         if (memoDict[key] === undefined) {
//             var fnresult = fn.apply(undefined, arguments);
//             memoDict[key] = fnresult;
//             console.log("key not present");
//             return fnresult;
//         }
//         console.log("key present");
//         return memoDict[key];
//     }
// }

var memoize = function (fn) {
    var memoDict = {};
    return function () {
        var key = Array.prototype.slice.call(arguments).join('-');
        if (memoDict[key] === undefined) {
            var fnresult = fn.apply(undefined, arguments);
            memoDict[key] = fnresult;
            console.log("key not present");
            return fnresult;
        }
        console.log("key present");
        return memoDict[key];
    }
}

// Array.prototype.slice.call(arguments);
// [].slice.call(arguments);

// var memSum = memoize(sum);
// console.log(memSum(2, 3)); // пресмята, връща 5
// console.log(memSum(3, 3)); // пресмята, връща 6
// console.log(memSum(2, 3)); // директно връща 5 без да смята

function curry(fn) {
    return function curried() {
        var args = Array.prototype.slice.call(arguments);
        if (args.length >= fn.length) {
            return fn.apply(undefined, args);
        } else {
            д
            return function () {
                var args2 = args.concat(Array.prototype.slice.call(arguments));
                return curried.apply(undefined, args2);
            }
        }
    }
}

// function compose() {
//     var Fns = Array.prototype.slice.call(arguments).reverse();
//     return function helper() {
//         var args = Array.prototype.slice.call(arguments);
//         for (var idx in Fns) {
//             args = Fns[idx].apply(undefined, +idx === 0 ? args : [args]);
//         }
//         return args;
//     }
// }

// function compose() {
//     var Fns = Array.prototype.slice.call(arguments).reverse();
//     return function helper() {
//         var args = Array.prototype.slice.call(arguments);
//         Fns.reduce(function (acc, curr, idx) {
//             return curr.apply(undefined, idx === 0 ? acc : [acc]);
//         }, args)
//     }
// }

function compose() {
    var Fns = Array.prototype.slice.call(arguments);
    return function helper() {
        var args = Array.prototype.slice.call(arguments);
        Fns.reduceRight(function (acc, curr, idx) {
            return curr.apply(undefined, idx === Fns.length - 1 ? acc : [acc]);
        }, args)
    }
}

var addOne = (x) => {
    return x + 1
};
var sqrt = (x) => x * x;
var arrSqrt = (x) => [x * x];
var log = (x) => console.log(x);

addOneSqrtAndPrint = compose(log, arrSqrt, addOne);

console.log(addOneSqrtAndPrint(1)); // 4


function add(a, b, c, d) {
    return a + b + c + d;
}

var curryadd = curry(add);