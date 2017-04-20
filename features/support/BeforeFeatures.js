var Selenium = require('nightwatch/lib/runner/selenium.js');
var config = require('../../nightwatch.conf.js');

//Before we start any features, run up the selenium server
module.exports = function () {
    this.registerHandler('BeforeFeatures', function (event, callback) {
        Selenium.startServer(config, function () {
            callback();
        });
    });
};

