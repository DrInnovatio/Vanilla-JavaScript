// Objects
// one of the Javascripts data types.
// a collection of related data and / or functionality.
// Nearly all objects in JavaScript are instances of Object

const name = 'Bora';
const age = 33;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

function theCar(vihecle) {
  console.log(vihecle.model);
  console.log(`made in ${vihecle.year}`);
  console.log(`$${vihecle.price}`);
}

const car1 = { model: "HX-5", year: 2019, price: 29300 };

theCar(car1);

// const obj1 = {};   Object literal syntax
// const obj2 = new Object(); Object constructor syntax

// can add properties later

car1.fuel = true;
console.log(car1.fuel);

// can delete properties later

delete car1.fuel;
console.log(car1.fuel);

// 2. Computed properties
// Key should be always string

console.log(car1.model);
console.log(car1['model']);

car1['fuel'] = true;
console.log(car1.fuel);

function printCar(obj, key) {
  console.log(obj[key]);
}

printCar(car1, 'model');
printCar(car1, 'price');


// 3. Property value shorthand

const person1 = { name: 'bob', age: 22 };
const person2 = { name: 'steve', age: 31 };
const person3 = { name: 'dave', age: 17 };
//const person4 = makePerson('TJ', 19);

const person5 = new Person('Danny', 41);

//console.log(person4);
console.log(person5);

// function makePerson(name, age) {
//   return {
//     name,
//     age,
//   };
// };

// 4. Contructor Function

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 5. in operator: property existance check (key in obj)

console.log('name' in person1);
console.log('age' in person1);
console.log('random' in person1);
console.log(person1.random);

// 6. for.. in vs for.. of
// for (key in obj)

for (key in person1) {
  console.log(key)
}

for (key in car1) {
  console.log(key)
}

// for (value of iterable)

const array = [1, 2, 4, 5];

for (value of array) {
  console.log(value);
}

// 7. Fun Cloning

const user1 = { name: "John", age: 22 };
const user2 = user1;

user2.name = 'Coder';
console.log(user1);

// OLD way

const user3 = {};
for (key in user1) {
  user3[key] = user1[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user1);
console.log(user4);

const book1 = { writer: "Nick Young", year: 1982 };
const book2 = Object.assign({}, book1);
console.log(book1);

// another example

const fruit1 = { color: 'red', price: 23 };
const fruit2 = { color: 'blue', size: 'big' };

const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
console.log(mixed);
