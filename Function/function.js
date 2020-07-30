// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Parameters
// Premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.age = 20;
}

const Brandon = { age: 39 };
changeName(Brandon);
console.log(Brandon)


// 2. Default parameters (added in ES6)

function showMessage(message, from = "the other side") {
  console.log(`${message} by ${from}`);
}

showMessage('Hi');

// 3. Rest parameters (added in ES6)

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

printAll('dream', 'coding', 'ellie');

console.log("=========================")

// 4. Local scope

let globalMessage = 'global';

function printMessage() {
  let message = 'hello';
  console.log(message);
  console.log(globalMessage);

}

printMessage();

console.log("=========================")

// First-class function 
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another  function





// Function Expression
// a function declaration can be called earlier than it is defined. (hoisted)
// function expression is created when the execution reaches it.

const print = function () { // anonymous function
  console.log('print');
};

print();
const printAgain = print;
printAgain();


// 5. Callback function using function expression

function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () {
  console.log('Yes!!');
};

const printNo = function print() {
  console.log('no!!');
};

randomQuiz('wrong', printYes, printNo)
randomQuiz('love you', printYes, printNo)

// 6. Arrow Function
// Always anonymous function

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;

// IIFE : Immidiately Invoke Function Expression

(function hello() {
  console.log('IIFE')
})();


