
/*

посочете кое какво е

константа         -  const
атомарна стойност -  atomic (scalar)
променима         -  mutable
непроменима       -  immutable
дефинирана        -  defined 
недефинирана      -  undefined
нулева            -  null
истина/неистна    -  true/false
по стойност
по референция     

*/


const c = 20;
const s = "ssss";
// const p = [1, 2, 3, undefined, undefined, 30];

const p = [1, 2, 3];

// we can change the structure that 
// the const variable points to 

p[5] = 10;
p.push(10);

p[5000] = "wow"


console.log(p);

{
    // block level visibility
    let x = 20;
    console.log(x);

    // function level visibility
    // will go in the global object
    var y = 30;
}

function test() {
    "use strict";
    console.log(vvv);
    console.log(ano);

    var vvv = 20;
    let ano = "test here";
}

// test();

let es6test = (a, b, c) => {
    console.log([a,b,c].join(' '));
}

// a function returning function in ES6
function _l(_, _, _, _) {
    return function (_) {
        return _ + 1 
    }
}

// arrow functions can do the same like
const l = _ => _ => ( { a: 20, c: 30 });

let res = l("XXX")(10);

const es6t2 = () => {
    p.forEach( (e, i) => { 
        console.log('element ' + e + ' is on ' + i + 'th position');
    })    
}

(new Promise( (res, _) => {
    this.t = 20;
    this.other = 'OTHER';

    setTimeout( () => { // context is automatically bound
        console.log(this.t);        // prints 20
        res(0);
    }, 1000);

    setTimeout( function() {
        console.log(this.t);        // undefined
        res(0);
    }, 1200);

})).then( () => {
    // even though the promise is
    // going to be resolved twice
    // this is not going to be called twice
    debugger;
})

// using lambda/arrow functions
// to create objects is generally
// not a very smart idea
var obj = {
    prop: "something",
    meth: () => {
        // please mind that 
        // "this" here is not
        // the object context 
        console.log(this.prop);  // undefined
    }
}

obj.meth();

//////////////////////////////////////////////////////////////////////////////

let fnc = function (varg) {
    (typeof varg === 'function') && varg(this.baba);
}

let ctx = {baba: 'Stana'};
let zf = fnc.bind(ctx);
zf();
zf.call({baba: "Pena"}, console.log);   // prints Stana
fnc.call({baba: "Pena"}, console.log);  // prints Pena

ctx.baba = 'Gina'

let prom = new Promise( zf );
prom.then(val => {
    console.log(val);                   // prints Gina
})

//////////////////////////////////////////////////////////////////////////////

const pers = { 
    name: 'Gheorghi',
    family: 'Penkov',
    age: 33
}

// destructuring of object into variables
let { name, family } = pers;

// swap
[ name, family ] = [ family, name ]

// destructuring of array into variables
let [val1, val2, val3] = p;

function norm({name, family }) {
    console.log([name, family])
}

const parr = [1,2,,,5,6,,,'wow']

// using spread operator
let filt = parr.reduce( (a, e) => 
    ( e ? [...a, e] : a), [])

// let filt = parr.reduce( (a, e) => 
//     ( e ? a.unshift(e) && a : a), [])

console.log(filt.lengh); // prints 5

// example of template literal 
console.log(
    `това са стойностите: ${ p.reduce((a, e) =>  ( e ? [...a, e] : a), [] ) }`);

// antoher example of template literal
var reshtml = `
 <ul>
    ${ filt.map( e => `<li>${e}</li>` ).join('') }
 </ul>
`;

debugger;