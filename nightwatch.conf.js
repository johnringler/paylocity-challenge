require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'features/step_definitions',
    '--require', 'features/hooks/',
    '--format', 'pretty',
    '--format', 'json:reports/cucumber.json',
    '--format-options', '{"colorsEnabled":false}',
    'features'
  ]
})

module.exports = {
  'page_objects_path': './page-objects',
  "output_folder" : "./reports",
  "custom_commands_path": "",
  "custom_assertions_path": "",
  "selenium" : {
    "start_process" : true,
    "server_path" : "./bin/selenium-server-standalone-2.47.1.jar",
    "log_path" : "",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "./bin/chromedriver"
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : process.env.URL,
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "desiredCapabilities": {
        "browserName": "chrome"
      },
      "screenshots" : {
        "enabled" : true,
        "on_failure" : true,
        "path" : "../tests/output/"
      }
    },
    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
          "window-size=1280,800"
          ]
        }
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox"
      }
    }
  }
}
