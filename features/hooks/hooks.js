// hooks.js
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Before, After}) => {
  Before((scenario, callback) => {
    console.log('Before start');
    setTimeout(() => {
      console.log('Before end');
      callback();
    }, 1000);
  });

  After((scenario, callback) => {
    console.log('After start');
    setTimeout(() => {
      console.log('After end');
      callback();
    }, 1000);
  });
})



'use strict';

const reporter = require('cucumber-html-reporter');
const LocalStorage = require('node-localstorage').LocalStorage;
const fs = require('fs');
const dir = '../data-container';

// create data container folder for npm localstorage if it does not exist in the project
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}


this.Before((scenario, callback) => {

  global.localStorage = new LocalStorage(`${dir}`);

//  Clear browser cookies
browser.manage().deleteAllCookies();

// Set default Timeout
this.setDefaultTimeout(20 * 1000);
callback();
});


this.After((scenario, callback) => {

  global.localStorage._deleteLocation();
  callback();
});

this.AfterFeatures((features, callback) => {
  const date = new Date();
  const newMonth = date.getMonth() + 1;
  const newDay = date.getDate();
  const newYear = date.getFullYear();
  const newHrs = date.getHours().toString();
  const newMin = date.getMinutes().toString();

  const outDir = `../../reports/cucumber_report-${newMonth}-${newDay}-${newYear}-${newHrs}h-${newMin}m.html`;
  const options = {
    theme: 'bootstrap',
    jsonFile: '../../reports/cucumber.json',
    output: outDir,
    reportSuiteAsScenarios: true,
    launchReport: true
  };
  reporter.generate(options);

});

module.exports = systemHooks;
