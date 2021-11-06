
// function Const() {
//     this.prop = " something "
//     return this
// }

// Const.prototype.fn = function() { 
//     console.log('here')
// }

// var obj = new Const();
// var obj2 = Const.call({other: 'thing'})
// obj2.__proto__ = Const.prototype
// obj2.fn()

var string = "at 12:20 today service [SERVNAME] was started"

var r = new RegExp(
    '(\\d+)')

var regex = /([\d\:]+).*?\[([A-Z]+)/

if (regex.test(string)) {
    console.log("ok -> tested")
}
var res = string.match(regex)

var digitsCount = string.search(/to.*?y/g)

var ary = [
    "this is a test",
    "where some text",
    "needs to be parsed",
    "and words found",
    "but baba isn't"
]

// find the line where:
//   the first word that contains [oe] 
//   is with length 4

ary.forEach(function(e) {
    var retemlp = /(\W|^)(\w*[oe]\w*)(\W|$)/
    var res = e.match(retemlp) 
    if (res !== null && res[2] !== undefined && res[2].length === 4) {
        console.log(
            ['the line [', e, '] has some words with o/e and length']
            .join(' '))
    }

})

string.replace('today', 'yesterday')

var censored = string.replace(/[aoeiuy]/g, 'X')

function replfunc(m, op1, _, op2) {
    return (parseInt(op2) + parseInt(op1))
}

var expr = " ( 1 + 3 ) + ( 3 + 5 ) + ( 6 + (8 + 5) ) "
var res = expr.replace(
    /[(]\s*(\d+)\s*([+*/])\s*(\d+)\s*[)]/g,
    replfunc
)

var r2 = expr.replace(/(\d)+\s*[+-/*]\s*(\d+)/g, '$2 + $1')

var ary = expr.split(/[)]\s*[+-]\s*[(]/)

Array.prototype.testAll = function(regex) {
    return this.reduce(function (a, e) {
        return a && regex.test(e)
    }, true)
}

var tares = [123, 343, 432, 342, 342, 'hax!'].testAll(/^\d+$/)

debugger;