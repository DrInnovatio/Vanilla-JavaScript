'use strict';

// Object-oriented programming
// class: template
// object: instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class Declarations

class Person {
  // constructor
  constructor(name, age, phone) {
    //fields
    this.name = name;
    this.age = age;
    this.phone = phone;
  }

  speak() {
    console.log(`${this.name}: Hello `)
  };
  phoneBooth() {
    console.log(`${this.phone} is Brandon's number. `)
  }
  //               this here means 'object';
};

const Brandon = new Person('Brandon', 20, '0451590410');
console.log(Brandon.name)
console.log(Brandon.age)
console.log(Brandon.phone)
Brandon.speak();
Brandon.phoneBooth();


// 2. getter and setter

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if(value < 0) {
    //   throw Error('age cannot be negative!');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);

// 3. Fields (public, private)
// recently

class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Recently

class Article {

  static publisher = "Amazon Kindle";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher);
console.log(Article.publisher);  // static is sticked to class, not an object.
Article.printPublisher();


// 5. Inheritance
// a way for one class to exptend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {

}

class Triangle extends Shape {

  draw() {
    super.draw();      // calling the parent's method.
    console.log('^')
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color : ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. class checking : instanceOf

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);   // Object => Javascript Object.
console.log(triangle.toString());
console.log(object)