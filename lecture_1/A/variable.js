// 1. use strict 
// added in ES 5
// use if for VanillaJS

//'use strict';

// 2. Variables
// let (added in ES 6)

let globalName = 'global name';

{
  let name = 'ellie';
  document.writeln(name);
  name = "helle";
  document.writeln(name);
  document.writeln(globalName);
}
document.writeln(name);
document.write(globalName);


// Don't use var
// var hoisting (move declareation from bottom to top)
// var has no block scope.


// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

const count = 17;
const size = 17.1;
document.write(`value: ${count}, type: ${typeof count}`);
document.write(`value: ${size}, type: ${typeof size}`);

// String

const char = "c";
const brendan = "Brandon";
const greeting = "Hello " + brendan;

console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type : ' + typeof helloBob);


// boolean
// false: 0 , null , undefined, NaN, '' 
// true: any other value

const canRead = true;
const test = 3 < 1;

console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null 

let nth = null;
console.log(`value : ${nth}, type : ${typeof nth}`);

// undefined

let x = undefined;
console.log(`value : ${x}, type : ${typeof x}`);

// Symbol , creat unique identifiers for objects

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)

// 5. Dynamic typing : dynamically typed language

let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '4';
console.log(`value: ${text}, type: ${typeof text}`);

const ellie = { name: 'ellie', age: 20 };
ellie.age = 23;
ellie.name = "Wendy";
console.log(ellie);