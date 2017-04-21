const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

const login = client.page.loginPage();
const dashboard = client.page.benefitsDashboardPage();

const generatedValues = require('../../lib/generated-values.js');
const data = require('../../lib/paycheck-data.json');

defineSupportCode(({ Given, Then, When }) => {

  Given(/^an Employer$/, () => {
    return login
      .navigate()
      .assert.title('Login')
      .waitForElementVisible('@body', 1000)
      .setValue('@username', process.env.USERNAME)
      .setValue('@password', process.env.PASSWORD)
      .click('@loginButton');
  });

  Given(/^I am on the ([^"]*) page$/, (pageName) => {
    return client
      .assert.title(pageName);
  });

  When(/^I select Add Employee$/, () => {
    return dashboard
      .click('@addEmployeeButton');
  });

  When(/^I select the Action (X|Edit)$/, (action) => {
    const row = 1;
    if (action === 'X') {
      return dashboard.employeeDelete(row);
    } return dashboard.employeeEdit(row);
  });

  Then(/^I should be able to enter employee details$/, () => {
    const dependents = generatedValues.setNumberDependents();
    const discount = generatedValues.setDiscount();
    return dashboard
      .waitForElementVisible('@employeeForm', 1000)
      .assert.visible('@employeeForm')
      .setValue('@employeeDependents', dependents);
  });

  Then(/^First Name does not begin with "([A-Z])" or "([a-z])"$/, (letterUc, letterLc) => {
    const firstname = generatedValues.setFirstNameDoesntStartWithLetter(letterUc, letterLc);
    const lastname = generatedValues.setLastName();
    return dashboard
      .setValue('@employeeFirstName', firstname)
      .setValue('@employeeLastName', lastname);
  });


  Then(/^First Name begins with "([A-Z])" or "([a-z])"$/, (letterUc, letterLc) => {
    const firstname = generatedValues.setFirstNameStartsWithLetter(letterUc, letterLc);
    const lastname = generatedValues.setLastName();
    return dashboard
      .setValue('@employeeFirstName', firstname)
      .setValue('@employeeLastName', lastname);
  });

  Then(/^the employee should save$/, () => {
    return dashboard
      .click('@submitButton');
  });

  Then(/^I should see the employee in the table$/, () => {
    const first = localStorage.getItem('firstname');
    const last = localStorage.getItem('lastname');
    return dashboard
      .waitForElementVisible('@employeeForm', 1000)
      .assert.containsText('@employeeTable', first)
      .assert.containsText('@employeeTable', last);
  });

  Then(/^the employee has a ([0-9]*)% discount$/, (percent) => {
    const discount = percent / 100;
    global.localStorage.setItem('discount', discount);
  });

  Then(/^the benefit cost calculations are correct$/, () => {
    const row = 2;
    const d = localStorage.getItem('discount');
    const dependents = localStorage.getItem('dependents');
    const expectedSalary = data.baseSalary * data.paychecksPerYear;
    const grossPay = data.baseSalary;
    const expectedBenefitCost = ((1 - d) * ((1000 + (500 * dependents)) / data.paychecksPerYear))
      .toFixed(2);
    const expectedNetPay = grossPay - expectedBenefitCost;
    return dashboard
      .checkValues(row, expectedSalary, dependents, grossPay, expectedBenefitCost, expectedNetPay);
  });

  Then(/^the employee should be deleted$/, () => {
    return dashboard
      .expect.element('@employeeForm').to.not.be.visible.after(2000);
  });

});
