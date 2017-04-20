const Chance = require('chance');
const chance = new Chance();

// const LocalStorage = require('node-localstorage').LocalStorage;
// const fs = require('fs');
// const dir = './data-container';

// // Create data container folder for npm localstorage if it does not exist in the project
// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir);
// }

// global.localStorage = new LocalStorage(`${dir}`);

module.exports = {

  setFirstNameStartsWithLetter: function (letter_uc, letter_lc) {
    let firstname = chance.first();
    while (firstname[0] !== letter_uc && firstname[0] !== letter_lc ) {
      firstname = chance.first();
    }
    global.localStorage.setItem('firstname', firstname);
    return firstname;
  },

  setFirstNameDoesntStartWithLetter: function (letter_uc, letter_lc) {
    let firstname = chance.first();
    while (firstname[0] === letter_uc || firstname[0] === letter_lc) {
      firstname = chance.first();
    }
    global.localStorage.setItem('firstname', firstname);
    return firstname;
  },

  setLastName: function () {
    const lastname = chance.last();
    global.localStorage.setItem('lastname', lastname);
    return lastname;
  },

  setNumberDependents: function () {
    const dependents = chance.integer({min: 0, max: 10});
    global.localStorage.setItem('dependents', dependents);
    return dependents;
  },

  setDiscount: function () {
    const discount = 0;
    global.localStorage.setItem('discount', discount);
    return discount;
  }

};
