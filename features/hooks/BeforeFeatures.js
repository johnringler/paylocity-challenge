const { defineSupportCode } = require('cucumber');

defineSupportCode(({ setDefaultTimeout, registerHandler }) => {
  registerHandler('BeforeFeatures', () => {
  });

});
