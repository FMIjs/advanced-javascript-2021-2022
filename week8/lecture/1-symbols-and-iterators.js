// const mySym = Symbol('test1');

// Symbol.for('a');

// const obj = {
//   [mySym]: 123
// };

// console.log(Object.getOwnPropertySymbols(obj));

// console.log(Object.keys(obj));

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// const arr = [1, 2, 3, 4];

// const arrIterator = arr[Symbol.iterator]();

// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());
// console.log(arrIterator.next());



const ivan = {
  name: 'Ivan',
  age: 20,
  tes: 123,
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    let counter = 0;

    return {
      next: () => counter < keys.length ?
        { value: this[keys[counter++]], done: false } :
        { value: undefined, done: true }
    };
  }
};

for (const value of ivan) {
  console.log(value);
}

const ivanPropertyValues = [...ivan];

console.log(ivanPropertyValues);