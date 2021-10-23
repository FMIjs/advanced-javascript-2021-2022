var obj = { 
  test: "me",
  val: 20,
  method: function( ) {
      this.val = 200;
  }
};

var inhObj = Object.create(obj, {
  prop: {
      writable: true,
      configurable:true,
      value: 10
  },
  MAXVAL: {
      writable: false,
      value: 1024
  }
});

inhObj.myProp = 20;
inhObj.MAXVAL = 100;
inhObj.method(); // call this function in such (inhObj) context
// obj.method()

m = obj.method;
m.apply({});

// var m = new m(); // possible but perhaps not really a good idea

function Person(n, f) {
  this.name = n
  this.family = f
}

Person.prototype.serialize = function() {
  return [this.name, this.family].join(' ')
}

function Asset(person) {
  this.owner = person
}

Asset.prototype.print = function() { 
  console.log("my owner is " + this.owner.serialize())
}

function Computer(brand, owner) {
  // call the super constructor (in C++ terms) with the same context
  Asset.apply(this, [owner])  
  this.brand = brand
}

// tie these two
Computer.prototype = Object.create(Asset.prototype)

Computer.prototype.print = function() {
  // call the super virtual function (in C++ terms)
  Asset.prototype.print.call(this); 
  console.log("my brand is " + this.brand)    
}

var canSerialize = { 
  serialize: function (){
      var self = this;
      return Object.keys(this)
          .map(function (e) {
              return ['"',
                  self[e].serialize ? self[e].serialize() : self[e],
                  '"'].join(' ') })
          .join(', ')
  }
}

var cobj = new Computer(
  'Apple', 
  new Person( 
      'Ilian',
      'Martinov' ))

function mixin(dest, src) {
  if (typeof(dest) !== 'function') {
      console.error(dest + ' is not a constructor function')
  }
  for(var v of Object.keys(src)) {
      dest.prototype[v] = src[v]
  }
}

mixin(Computer, canSerialize)

// cobj.print()
var res = cobj.serialize()
      
debugger;