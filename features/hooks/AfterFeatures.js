const { defineSupportCode } = require('cucumber');
const reporter = require('cucumber-html-reporter');

defineSupportCode(({ setDefaultTimeout, registerHandler }) => {
  setDefaultTimeout(30 * 1000);
  registerHandler('AfterFeatures', () => {
    const options = {
      theme:                  'bootstrap',
      jsonFile:               'reports/cucumber.json',
      output:                 'reports/cucumber.html',
      reportSuiteAsScenarios: true,
      launchReport:           true,
      storeScreenShots:       true,
    };
    return reporter.generate(options);
  });

});
