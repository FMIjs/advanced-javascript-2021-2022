
let obj = {
    prop: 20,
    p2: "this"
};

const handler = {
    get: function(target, prop, receiver) {
        return 'value';
    },
    set: function(target, prop, value) {
        target[prop] = prop
    }
  };
  
let objProx = new Proxy(obj, handler);

console.log(objProx.pro)
objProx.proXXXX = 20

