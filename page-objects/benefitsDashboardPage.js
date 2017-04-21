const dashboardCommands = {
  checkValues(row, salary, dependents, grossPay, benefitCost, netPay) {
    return this.api.pause(1000)
    .useXpath().verify.containsText(`//tbody/tr[${row}]/td[4]`, salary)
    .useXpath().verify.containsText(`//tbody/tr[${row}]/td[5]`, dependents)
    .useXpath().verify.containsText(`//tbody/tr[${row}]/td[6]`, grossPay)
    .useXpath().verify.containsText(`//tbody/tr[${row}]/td[7]`, benefitCost)
    .useXpath().verify.containsText(`//tbody/tr[${row}]/td[8]`, netPay);
  },

  employeeDelete(row) {
    return this.api.pause(1000)
      .useXpath().click(`//tbody/tr[${row}]/td[9]/span[1]`);
  },

  employeeEdit(row) {
    return this.api.pause(1000)
      .useXpath().click(`//tbody/tr[${row}]/td[9]/span[2]`)
      .waitForElementVisible('@spinner', 2000)
      .waitForElementNotVisible('@spinner', 2000);
  }

};

module.exports = {
  commands: [dashboardCommands],
  elements: {
    body:              'body',
    addEmployeeButton: 'button[id="btnAddEmployee"]',
    employeeForm:      'form[id="employees-form"]',
    employeeTable:     '[id="employee-table"]',
    spinner:           'spinner',

    // Add Employee Overlay
    employeeFirstName: {
      selector:       '//div[label[@for="firstname"]]//input',
      locateStrategy: 'xpath' },
    employeeLastName: {
      selector:       '//div[label[@for="lastname"]]//input',
      locateStrategy: 'xpath'
    },
    employeeDependents: {
      selector:       '//div[label[@for="dependents"]]//input',
      locateStrategy: 'xpath'
    },
    submitButton: '#addEmployeeModal button.btn-primary'
  }
};
