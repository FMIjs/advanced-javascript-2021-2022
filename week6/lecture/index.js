const data = [
  {
    id: 1,
    name: 'Ivan',
    age: 30,
    comments: [
      {
        id: 10,
        userId: 1,
        text: 'Hello World'
      }
    ]
  },
  {
    id: 2,
    name: 'Dragan',
    age: 21,
    comments: [
      {
        id: 13,
        userId: 2,
        text: 'Hello World 2'
      }
    ]
  },
  {
    id: 3,
    name: 'Gosho',
    age: 3,
    comments: [
      {
        id: 15,
        userId: 3,
        text: 'Hello World 3'
      }
    ]
  },
];

function createUser(name, age) {
  return { name, age };
}

const [
  {
    comments: [{ text: firstUserFirstCommentsText, ...rest }],
    comments: firstUserComments
  },
  { comments: secondUserComments },
  ...best
] = data;

function getComments(data) {
  // return data.reduce((acc, { comments }) => acc.concat(comments), []);
  return data.flatMap(({ comments }) => comments);
  // return data.map(({ comments }) => comments).flat();
  // let comments = [];
  // for (const { comments: userComments } of data) {
  //   comments = comments.concat(userComments);
  // }
  // return comments;
}

const allComments = getComments(data);
console.log(allComments);


function removeProperty(propName, { [propName]: removedProp, ...rest }) {
  return rest;
}

const removeProp = (_, { [_]: __, ...$ }) => $;

const obj = { data: 123, test: 111 };

const newObj = removeProp('data', obj);
console.log(newObj);


// function multipleArgs(a, b, c, d) {

// }

// const data2 = [1, 2, 3, 4];

// const data3 = [4, 5, 6, ...data2];

// multipleArgs(...data2);



// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }


// // "static" method
// Person.logData = function (obj) {
//   console.log(obj.name, obj.age, obj.position);
// };

// Person.prototype.getUserData = function () {
//   const { name, age } = this;
//   return { name, age, target: 'Person' };
// };

// function Empolyee(name, age, position) {
//   Person.call(this, name, age); // super
//   this.position = position;
// }

// Empolyee.prototype = Object.create(Person.prototype); // extends

// Empolyee.prototype.getUserData = function () {
//   const proto1 = Object.getPrototypeOf(this);
//   const proto2 = Object.getPrototypeOf(proto1);
//   const superData = proto2.getUserData.call(this);
//   return { ...superData, test: 132 };
// };


// const a = new Empolyee('sda', 20, 'dad');

// const result = a.getUserData();

// console.log(result);






class Person {

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  logData() {
    console.log('This is Person');
  }
}

class Employee extends Person {

  static logData(obj) {
    console.log(obj.name, obj.age, obj.position);
  }

  constructor(name, age, position) {
    super(name, age);
    this.position = position;

    this.#best = 1233;
  }

  logData() {
    super.logData();
    console.log('This is Employee');
  }

  // using setters and getters
  set data({ name, age, position }) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  get data() {
    return this;
  }

}

const a = new Employee('sdada', 20, 'dsada');
a.logData();

Employee.logData(a);
