var i;
// // Primitive values:
// var var0;
// var var1 = undefined; // undefined
// var var2 = 'string'   // string
// var var3 = 40;        // number ---> https://en.wikipedia.org/wiki/IEEE_754
// var var4 = true;      // boolean
// var var5 = null;      // null

// // Non primitive vales:
// var var6 = { prop1: 1000 }; // object
// var var7 = [1, 2, 3, 'das', 'das', true, {}, [[], {}]]; // array
// var var8 = function name() { }; // function (function expression)

// // Immutable
// var var9 = var2 + '123';
// console.log(var3) // > "string123";
// console.log(var2) // > "string";

// var2[1] = '2';
// console.log(var2); // > "string"

// // Non immutable
// var var10 = var6;
// var10.test = 123;

// console.log(var10); // { prop1: 1000, test: 123 } ------ Same object in the memory
// console.log(var6); //  { prop1: 1000, test: 123 } ------------------|

// console.log(typeof var1) // "undefined"
// console.log(typeof var0) // "undefined"
// console.log(typeof var2) // "string"
// console.log(typeof var3) // "number"
// console.log(typeof var4) // "boolean"
// console.log(typeof var5) // "object" ???

// console.log(typeof var6) // "object"
// console.log(typeof var8) // "function"
// console.log(typeof var7) // "object" ???

// // how to check NaNs:
// isNaN('dasds') // > true (bug)
// Number.isNaN('dasds') // > false

// // Falsy values: false, NaN, null, undefined, '', 0


// console.log(4 == '4');  // https://262.ecma-international.org/5.1/#sec-11.9.3
// console.log(4 === '4'); // https://262.ecma-international.org/5.1/#sec-11.9.6


// var test = null

// if (test == undefined) {
//   console.log('OMG!');
// }

// if (test === undefined || test === null) {
//   console.log('HELLO!');
// }

// var str = '3213';

// // NOT GOOD:
// // if (typeof str === 'string')  // https://262.ecma-international.org/5.1/#sec-7.9
// // {

// // }

// // GOOD:
// // if (typeof str === 'string') {

// // } else if () {

// // } else {

// // }

// function hello() { // function declaration
//   console.log('HELLO');
// }

// var test = 123;
// console.log(test);

// // function testFn() {
// //   var best = 333;
// //   // var test = 777;
// //   console.log(best);
// //   console.log(test);

// //   function test2() {
// //     console.log(best);
// //     console.log(test);
// //   }
// //   test2();
// // }

// // testFn();

// // { var a = 1; console.log(1); }
// // console.log(a);

// console.log(gen2); // > undefined

// gen2 = 1000;

// var gen = createGenerator();
// var gen2 = createGenerator();
// var lg = console.log;

// lg(1111);

// console.log(gen());
// console.log(gen());
// console.log(gen());

// function createGenerator() {
//   var i = 0;
//   return function generateNumber() {
//     return i++;
//   };
// }








// function fn1() {
//   var test;
//   function adsa() {
//     var test2;
//     function sadasdsa() {

//     }
//     // ...
//     //... 
//     // ...

//     test2 = 100


//   }
//   // ...
//   //... 
//   // ...

//   test = 10;

//   // ...

// }

// test2();
// test(); //test is not a function

var test = function () {

};

test();

// var obj = {
//   test: function () {

//   },
// }

// function test2() {
//   console.log(213)
// }

// [1, 2, 3].forEach(function (el, index, arr) {
//   console.log(el, index, arr);
// });

// var arr2 = [1, 2, 3].map(function (el, index, arr) {
//   return el + 1;
// });

var result = [1, 2, 3]
  .map(function (x) {
    return x + 1;
  })
  .filter(function (x) {
    return x % 2 === 0;
  })
  .map(function (x) {
    return x + 2;
  });

console.log(result);

function reduceFn(accumultor, currentItem, currentIndex, array) {
  var num = currentItem + 1;
  if (num % 2 === 0) { return accumultor.concat(num + 2); }
  return accumultor;
}

var result2 = [1, 2, 3].reduce(reduceFn, []);
console.log(result2);
