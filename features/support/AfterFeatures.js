var Selenium = require('nightwatch/lib/runner/selenium.js');

'use strict';

const reporter = require('cucumber-html-reporter');

//After all features are done, shut down the server
module.exports = function () {
    this.registerHandler('AfterFeatures', function (event, callback) {
      const date = new Date();
      const newMonth = date.getMonth() + 1;
      const newDay = date.getDate();
      const newYear = date.getFullYear();
      const newHrs = date.getHours().toString();
      const newMin = date.getMinutes().toString();

      const outDir = `/Users/jringler/Code/paylocity/reports/cucumber_report-${newMonth}-${newDay}-${newYear}-${newHrs}h-${newMin}m.html`;

      const options = {
        theme: 'bootstrap',
        jsonFile: '/Users/jringler/Code/paylocity/reports/cucumber.json',
        output: outDir,
        reportSuiteAsScenarios: true,
        launchReport: true
      };

      reporter.generate(options);

      Selenium.stopServer(function () {
        callback();
      });
    });
};

