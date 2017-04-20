//page-objects/login-page.js

module.exports = {
  url: process.env.URL,
  elements: {
    body: 'body',
    username: 'input[name="form-username"]',
    password: 'input[name="form-password"]',
    loginButton: 'button[id="btnLogin"]'
  }
}
