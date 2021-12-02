function* genF(msg) {
  console.log(msg);               // 3, 11
  let back = yield 10;            // 4
  console.log(back);              // 7
  yield 20;                       // 8
} // 10

let genInstance = genF('test');   // 1
let genInstance2 = genF('lest');

let res = genInstance.next(5);    // 2
console.log( res );               // 5

res = genInstance.next(6);        // 6
console.log( res );               // 9

res = genInstance.next('!!!');
genInstance2.next()  


// https://www.npmjs.com/package/coro ==> cool lib with gens
