const {defineSupportCode} = require('cucumber');
const LocalStorage = require('node-localstorage').LocalStorage;

defineSupportCode(({setDefaultTimeout, registerHandler}) => {
  registerHandler('AfterScenario', function () {
    global.localStorage._deleteLocation();
  });

});
