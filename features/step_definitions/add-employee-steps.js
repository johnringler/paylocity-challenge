//step-definitions/add-employee-steps.js

const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

const login = client.page.loginPage();
const dashboard = client.page.benefitsDashboardPage();

const generatedValues = require("../../lib/generated-values.js")
const data = require("../../lib/paycheck-data.json");

defineSupportCode(({Given, Then, When}) => {

  Given(/^an Employer$/, () => {
    return login
      .navigate()
      .assert.title('Login')
      .waitForElementVisible('@body', 1000)
      .setValue('@username', process.env.USERNAME)
      .setValue('@password', process.env.PASSWORD)
      .click('@loginButton');
    client.end();
  });

  Given(/^I am on the ([^"]*) page$/, (page_name) => {
    return client
      .assert.title(page_name);
    client.end();
  });

  When(/^I select Add Employee$/, () => {
    return dashboard
      .click('@addEmployeeButton');
    client.end();
  });

  When(/^I select the Action (X|Edit)$/, (action) => {
    const row = 1;
    if (action === 'X') {
      return dashboard.employeeDelete(row);
    } else return dashboard.employeeEdit(row);
    client.end();
  });

  Then(/^I should be able to enter employee details$/, () => {
    const dependents = generatedValues.setNumberDependents();
    const discount = generatedValues.setDiscount();
    return dashboard
      .waitForElementVisible('@employeeForm', 1000)
      .assert.visible('@employeeForm')
      .setValue('@employeeDependents', dependents);
    client.end();
  });

  Then(/^First Name does not begin with "([A-Z])" or "([a-z])"$/, (letter_uc, letter_lc) => {
    const firstname = generatedValues.setFirstNameDoesntStartWithLetter(letter_uc, letter_lc);
    const lastname = generatedValues.setLastName();
    return dashboard
      .setValue('@employeeFirstName', firstname)
      .setValue('@employeeLastName', lastname);
    client.end();
  });


  Then(/^First Name begins with "([A-Z])" or "([a-z])"$/, (letter_uc, letter_lc) => {
    const firstname = generatedValues.setFirstNameStartsWithLetter(letter_uc, letter_lc);
    const lastname = generatedValues.setLastName();
    return dashboard
      .setValue('@employeeFirstName', firstname)
      .setValue('@employeeLastName', lastname);
    client.end();
  });

  Then(/^the employee should save$/, () => {
    return dashboard
      .click('@submitButton');
    client.end();
  });

  Then(/^I should see the employee in the table$/, () => {
    const first = localStorage.getItem('firstname');
    const last = localStorage.getItem('lastname');
    return dashboard
      .waitForElementVisible('@employeeForm', 1000)
      .assert.containsText('@employeeTable', first)
      .assert.containsText('@employeeTable', last);
    client.end();
  });

  Then(/^the employee has a ([0-9]*)% discount$/, (percent) => {
    const discount = percent / 100;
    global.localStorage.setItem('discount', discount);
  });

  Then(/^the benefit cost calculations are correct$/, () => {
    const row = 2;
    const discount = localStorage.getItem('discount');
    const dependents = localStorage.getItem('dependents');
    const expectedSalary = data.baseSalary * data.paychecksPerYear;
    const grossPay = data.baseSalary;
    const expectedBenefitCost = ((1-discount) * ((1000 + (500 * dependents)) / data.paychecksPerYear)).toFixed(2);
    const expectedNetPay = grossPay - expectedBenefitCost;
    return dashboard
      .checkValues(row, expectedSalary, dependents, grossPay, expectedBenefitCost, expectedNetPay);
    client.end();
  });

  Then(/^the employee should be deleted$/, () => {
    return dashboard
      .expect.element('@employeeForm').to.not.be.visible.after(2000);
    client.end();
  });

});
