// --> Proxy <--
//   MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
//   The Proxy object enables you to create a proxy for
//   another object, which can intercept and redefine
//   fundamental operations for that object.

const someObj = {
  a: 1,
  b: 2
};

console.log(someObj.a); // 1

const prox = new Proxy(someObj, {
  get: (obj, prop) => {
    console.log(`getting ${prop} from object`)
    return obj[prop] || '<missing property>';
  },
  set: (obj, prop, newValue) => {
    obj[prop] = `new val -> ${newValue}`;
  }
});

console.log(prox.a); // logs: "getting a from object", 1
console.log(prox.c); // logs: "getting c from object", "<missing property>"

prox.a = '123';
console.log(prox.a); // logs: "getting a from object", "new val -> 123"
