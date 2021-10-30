function Person(name, age) {
  // this.name = name;
  this.age = age;
  this.getName = function () {
    return name;
  };

  return this;
}

Person.prototype.test = function () {
  console.log('TEST1');
};

var ivan = new Person('Ivan', 20); // Person.call({}, 'Ivan', 20)

ivan.test();

// The inheritance in JavaScript is a linked list: Obj1 ---> Obj2 --> Obj3

function User(name, age, role) {
  Person.call(this, name, age); // (1st STEP): call the "SUPER" class
  // why not just use:
  // this.name = name;
  // this.age = age;
  // instead of Person.call(this, name, age); ???
  // Because we want to attach any additional behaviour that the Person attaches
  // and also we want to automatically apply any future changes to the Person constructor
  // function automatically
  this.role = role;
  return this;
}

User.prototype = Object.create(Person.prototype); // (2st STEP): extends

User.prototype.test = function () {
  console.log('User test');
};

// without using constructor functions
var o = Object.create(Person.prototype); // create a new empty obj that has __proto__ -> Person.prototype
var u = User.call(o, 'Ivan', 20, 'admin'); // create out new user object





function mix(o1, o2) {
  for (var prop in o1) {

    o2[prop] = o1[prop];
  }
}

// object that holds some functionalities
var funcs = {
  test: function () {
    console.log('test')
  },
  test2: function () {
    console.log('test2')
  }
};
var obj = {}; // target object that we want to have some functionalities
mix(funcs, obj); // reference all the functionalities from funcs to obj
obj.test(); // use the referenced functionalities