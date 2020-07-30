// 1. String concatenation

console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// 2 Increment and decrement operators

let counter = 2;
const preIncrement = ++counter;

//counter = counter + 1
// preIncrement = counter;

console.log(`preIncrement: ${preIncrement}, counter : ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;

console.log(`preIncrement: ${postIncrement}, counter : ${counter}`);


// 3. Logical Operations : || (or), && (and), !(not)

const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value

console.log(`or : ${value1 || value2 || check()}`);

// && (and), finds the first falsy value

console.log(`and : ${value1 && value2 && check()}`);

//often used to compress long if-statement 
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log(':%');
  }
  return true;
}


// 7. Equality

const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality , no type conversion

console.log("=======================")

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


console.log("=======================")
// object equality by reference

const park1 = { name: "Brandon" };
const park2 = { name: "Brandon" };
const park3 = park1;

console.log(park1 == park2);
console.log(park1 === park2);
console.log(park1 === park3);

// Equality - Puzzler
console.log("=======================")
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

console.log("=======================")

// 8. Conditional operator : if
// if, else if, else

const name = 'matt';
if (name === 'matt') {
  console.log("Welcome matt");
} else if (name === 'coder') {
  console.log("You are an amazing coder");
} else {
  console.log("unknown");
}


console.log("=======================")

// 9. Ternary operator
// condition ? value1 : value2;

console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Swifch statement
// use for multiple of if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = "Chrome";

switch (browser) {
  case "IE":
    console.log("Go away~~");
    break;
  case 'Chrome':
  case 'Firefor':
    console.log("Love you!!");
    break;
  default:
    console.log('same all!');
    break;
}

console.log("=========================")

// while loop and do while loop

let i = 3;
while (i > 0) {
  console.log(`while : ${i}`);
  i--;
}

do {
  console.log(`do while : ${i}`);
  i--;
} while (i > 0);

// for loop

for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`Q1. ${i}`);
}