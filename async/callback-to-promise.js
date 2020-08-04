'use strict';

// JavaScript is synchronous. 
// Execute the code block by orger after hoisting.
// hoisting : var, function, declaration

console.log('1')
setTimeout(() => {
  console.log('22')
}, 2000)
console.log('3')

// Synchronous CallBack. The function is put at the top.

function printImmediately(print) {
  print();
}
printImmediately(() => console.log('Hello'));

// Asynchronous CallBack

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

console.clear();
// Callback Hell Example

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'Brandon' && password === 'kokos') ||
          (id === 'coder' && password === 'academic')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'Brandon') {
          resolve({ name: 'Brandon', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    })
  };
};

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`))
  .catch(console.log)