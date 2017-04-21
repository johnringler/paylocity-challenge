const pathDir = require('path');

module.exports = {
  url:      `file://${(pathDir.resolve(__dirname, process.env.URL)).replace('/page-objects', '')}`,
  elements: {
    body:        'body',
    username:    'input[name="form-username"]',
    password:    'input[name="form-password"]',
    loginButton: 'button[id="btnLogin"]'
  }
};
