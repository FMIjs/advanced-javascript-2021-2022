function* idGen(initialValue) {
  console.log(initialValue);
  let index = 0;
  while (true) {
    const value = yield index++;
    console.log(value);
  }
}

function idGenFn(initialValue) {
  console.log(initialValue);
  let counter = 0;
  return {
    next(value) {
      console.log(value);
      return counter++;
    }
  };
}

const iter = idGen('INITIAL VALUE');

console.log(iter.next());
console.log(iter.next('Hello World'));
console.log(iter.next('This is a cool'));
console.log(iter.next('Generator'));


const ivan = {
  name: 'Ivan',
  age: 20,
  tes: 123,
  *[Symbol.iterator]() {
    const keys = Object.keys(this);
    let counter = 0;
    while (counter < keys.length) {
      const key = keys[counter++];
      yield [key, this[key]];
    }
  }
};

for (const value of ivan) {
  console.log(value);
}

const ivanPropertyValues = [...ivan];

console.log(ivanPropertyValues);