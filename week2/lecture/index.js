// // Lecture 2 / 16.10.2021

// // Array / Object

// var a = 1;
// var b = 1;

// console.log(a === b); //! true

// var arr1 = [1, 2, 3];
// var arr2 = [1, 2, 3];

// console.log(arr1 === arr2); //! false
// console.log(arr1[1] === arr2[1]); //? true

// var arr1El1 = arr1[0]; //! 1

// var obj = { prop1: 1, prop2: 2, prop3: 3, 'prop-with-spec-char': 3 };

// var objProp1 = obj.prop1;
// var objProp1Alt = obj['prop1'];
// var prop2Key = 'prop2';
// var objProp2 = obj[prop2Key];

// console.log(objProp1 === objProp1Alt); //? true

// console.log(objProp2); //! 2
// objProp2 = 3;
// console.log(objProp2); //! 3
// console.log(obj[prop2Key]); //! 2 -- the original object hasn't changed

// // object prop adding
// obj.altNewProp = 'new prop'
// obj['new-prop'] = 'im a new prop with a spec char';
// const objNewPropWithSpecCharKey = 'spec-prop-key';
// obj[objNewPropWithSpecCharKey] = 'new-prop';
// obj['☕️'] = '❤️';

// console.log(obj['☕️']); //! ❤️

// // array prop adding
// console.log(arr1); // 1, 2, 3
// arr1[3] = 4; // 1, 2, 3, 4
// arr1[79] = 80; // 1, 2, 3, 4, 80
// console.log(arr1[60]); // undefined
// console.log(arr1.length); // 80, the length is changes 

// var arr3 = new Array(4);

// console.log(arr3.length); //! 4
// arr3.length = 5; // doesn't change the length
// console.log(arr3.length); //! 4

// var arr4 = new Array(4).fill(null);

// function logArray(arr) {
//   arr.map(function (el) {
//     console.log(el);
//   });
// }

// logArray(arr3); // doesn't log anything, elements are "empty"
// logArray(arr4); // logs nulls

// function range(start, end) {
//   var arrLength = end - start;
//   var resArr = new Array(arrLength + 1)
//     .fill(null)
//     .map(function (el, idx, arr) {
//       // el  --> the "current" element
//       // idx --> the "current" elements index
//       // arr --> the whole array
//       // el === null
//       return idx + start;
//     });
//   return resArr;
// }

// function ourMap(arr, fn) {
//   // arr --> the actual array
//   // fn  --> the function we want to execute on each el
//   return arr.map(function (el, idx) {
//     return fn(idx, el);
//   });
// }

// var arr5 = ['el1', 'el2', 'el3'];
// function mapFn(param1, param2) {
//   console.log(param1, param2);
// }

// arr5.map(mapFn);
// ourMap(arr5, mapFn);


// var arr6 = [1, 2, 3, 'some string', true, [1, 2, 3, 4]];
// console.log(arr6);
// arr6[5].push(['a', 'b', 'c']);

// var rangeArr = range(10, 20);
// console.log(rangeArr);



// obj.prop1 = null;
// console.log(obj.prop1); //! null

// typeof { 'prop1': 1 } === typeof [1, 2, 3]; //? true
// Array.isArray([1, 2, 3]); //? true
// Array.isArray({ 1: 1 });  //! false

// var isArray = ([] instanceof Array);

// var arrToCopy = [1,2,3,4];
// console.log(arrToCopy.slice(0, 1)); // [1]
// console.log(arrToCopy.slice(0, 2)); // [1, 2]
// var copiedArr = arrToCopy.slice(0);

// console.log(copiedArr);
