const Chance = require('chance');
const chance = new Chance();

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
