const { defineSupportCode } = require('cucumber');
const LocalStorage = require('node-localstorage').LocalStorage;

defineSupportCode(({ setDefaultTimeout, registerHandler }) => {
  registerHandler('AfterScenario', () => {
    global.localStorage._deleteLocation();
  });

});
