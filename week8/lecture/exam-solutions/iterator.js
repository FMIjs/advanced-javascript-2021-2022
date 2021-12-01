class Iterator {
  getIterator() {
    let index = 0;
    const keys = Object.keys(this);
    return {
      next: () => {
        const currentKey = keys[index++];
        return {
          value: currentKey ? { [currentKey]: this[currentKey] } : null,
          done: !currentKey
        };
      }
    };
  }
}

class User extends Iterator {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
}

const ivan = new User('Ivan', 20);
const iter = ivan.getIterator();
console.log(iter.next()); // > will log: { value: { name: ‘Ivan’ }, done: false }
console.log(iter.next()); // > will log: { value: { age: 20  }, done: false }
console.log(iter.next()); // > will log: { value: null, done: true }
console.log(iter.next()); // > will log: { value: null, done: true }
