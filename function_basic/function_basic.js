// Declaration Functions
function doSomething() {
  console.log('hello');
}

// Callinf the functions

doSomething();

function circle(r) {
  let area = r * r * 3.14;
  return area;
}

const result = circle(12);
console.log(`The area of circle is ${result}`);


function doAnything(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

doAnything(add);

const addFun = add;
console.log(add);
addFun(2, 3);