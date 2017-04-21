const Chance = require('chance');

const chance = new Chance();

module.exports = {

  setFirstNameStartsWithLetter(letterUc, letterLc) {
    let firstname = chance.first();
    while (firstname[0] !== letterUc && firstname[0] !== letterLc) {
      firstname = chance.first();
    }
    global.localStorage.setItem('firstname', firstname);
    return firstname;
  },

  setFirstNameDoesntStartWithLetter(letterUc, letterLc) {
    let firstname = chance.first();
    while (firstname[0] === letterUc || firstname[0] === letterLc) {
      firstname = chance.first();
    }
    global.localStorage.setItem('firstname', firstname);
    return firstname;
  },

  setLastName() {
    const lastname = chance.last();
    global.localStorage.setItem('lastname', lastname);
    return lastname;
  },

  setNumberDependents() {
    const dependents = chance.integer({ min: 0, max: 10 });
    global.localStorage.setItem('dependents', dependents);
    return dependents;
  },

  setDiscount() {
    const discount = 0;
    global.localStorage.setItem('discount', discount);
    return discount;
  }

};
