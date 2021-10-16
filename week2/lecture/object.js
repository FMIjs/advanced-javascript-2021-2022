var obj = { a: 1 };

obj.a = 123;

delete obj.a; // slow operation (not recommended)

function createObject() {
  var obj = {};
  Object.defineProperty(obj, 'test', {
    // configurable?: boolean;
    // enumerable?: boolean;
    // value?: any;
    // writable?: boolean;
    get: function () {
      return 1000;
    },
    set: function (newValue) {
      console.log(newValue);
    }
  });
  return obj;
}

function personFactory(name, age) {
  return {
    name: name,
    age: age,
    getData: function () {
      return 'name: ' + name + ' age: ' + age;
    }
  };
}


var oPrototype = {
  getData: function () {
    return 100;
  }
};

// create a new object that has __proto__ ref to the given object as first arg
// and configure the properties a and b.
var o = Object.create(oPrototype, {
  a: {
    value: 999,
    writable: false
  },
  b: {
    configurable: false,
    writable: false,
    value: function () {
      console.log('Hello world!')
    }
  }
})

console.log(o.getData());
console.log(o.a);
console.log(o.b());

// nothing will happen because we configured this property with
// writable: false !!!
// IN STRICT MODE THIS WILL THROW AN ERROR!
o.b = function () { console.log('HELLO WORLD!') };
o.b();

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.data = 123; // Person.prototype is not the same as __proto__ !!!
Person.prototype.getData = function (arg1, arg2, arg3) {
  console.log(arg1, arg2)
  // this - variable that exists in every function and we 
  // can set it by using bind, call, apply
  // or we call the function from an object ( obj.fn() )
  return 'name: ' + this.name + ' age: ' + this.age;
};

var fn = Person.prototype.getData;

var obj = {
  name: 'test'
};
obj.fn = Person.prototype.getData;

obj.fn();

var string = fn.call( // calls the fn with:
  { name: 'TEST', age: 22222 }, // sets the fn THIS variable 
  1, // sets the first arg of the fn
  2  // sets the second arg of the fn
);
var string2 = fn.apply( // calls the fn with:
  { name: 'TEST', age: 22222 }, // sets the fn THIS variable 
  [1, 2] // sets the first and second arg of the fn
);

var boundFn = fn.bind( // creates a NEW bound fn with:
  { name: 'TEST', age: 22222 }, // sets the fn THIS variable 
  1, // sets the first arg of the fn
  2  // sets the second arg of the fn
);

boundFn(33, 34, 44);
console.log(string);


var ivan1 = new Person('Ivan', 31);
var ivan2 = new Person('Ivan', 32);
var ivan3 = new Person('Ivan', 33);
var ivan4 = new Person('Ivan', 34);

console.log(ivan1.data);
// this will put best on the current object ivan1;
ivan1.best = 1111;
// this will put test on the current object ivan1. 
// The Person.prototype.test will remain the same
ivan1.data = 333;
// Setters always work on the direct object
// Getter work on the full proto chain 
// (if the value is not found on the current object it will be searched for on 
// the __proto__)



// Prototypal chain search for a property (used only when GETTING a property!!!)
// ivan1.toString()
//
// {                          
//   name: 'Ivan1', 
//   age: 31,      (* searching for toString())
//   __proto: ----- * ------> { 
// }                             data: 111, 
//                               getData: fn,    (* searching for toString())
//                               __proto__  ------*-------> { 
//                             }                               toString: fn <-- toString is found
//                                                          }

// ivan1.data
//
// {                          
//   name: 'Ivan1', 
//   age: 31,      (* searching for data)
//   __proto: ----- * ------> { 
// }                             data: 111,  <-- data is found
//                               getData: fn,
//                               __proto__  --------------> { 
//                             }                               toString: fn 
//                                                          }

console.log(ivan1.getData());
console.log(ivan2.getData());


// var testObj = createObject();

// console.log(testObj.test);
// testObj.test = 123;




// FOR NEXT TIME:
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.test = function () {
  console.log('test');
};

function Admin(name, age) {
  // (1)! similar to "super()"
  User.call(this, name, age);
  this.type = 'ADMIN!';
}

// (2)!! similar to "extends"
Admin.prototype = Object.create(User.prototype);

// what if we do Admin.prototype = User.prototype ???
// why is it bad?

Admin.prototype.adminTest = function () {
  console.log('admin test');
};

var adm = new Admin('Ivan', 20);
adm.name // > "Ivan"
adm.age // > 20
adm.test(); // > "test"
adm.adminTest(); // > "admin test"
