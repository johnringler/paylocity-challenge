const {defineSupportCode} = require('cucumber');
const LocalStorage = require('node-localstorage').LocalStorage;
// const fs = require('fs');
// const dir = 'data-container';

//     // Create data container folder for npm localstorage if it does not exist in the project
// if (!fs.existsSync(dir)) {
//   fs.mkdirSync(dir);
// }

defineSupportCode(({setDefaultTimeout, registerHandler}) => {
  registerHandler('AfterScenario', function () {

    global.localStorage._deleteLocation();
})
});
