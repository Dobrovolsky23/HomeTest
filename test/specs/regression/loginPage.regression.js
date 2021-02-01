const loginPageSelectors = require('../../../data/selectors.json').loginPage;
const loginPageExpected = require('../../../data/expected.json').loginPage;
const loginPageInputPNeg = require('../../../data/input.json').loginPageNegative;

describe('Login Page', function () {
  before(() => {
    browser.url('/login');
  });

  it('should verify that header is displayed', function () {
    expect($(loginPageSelectors.header).isDisplayed()).to.be.true;
  });

  it('should verify that header text = "Login Page"', function () {
    expect($(loginPageSelectors.header).getText()).eq(loginPageExpected.header);
  });

  it('should verify that subheader is displayed', function () {
    expect($(loginPageSelectors.subheader).isDisplayed()).to.be.true;
  });

  it('should verify subheader text', function () {
    expect($(loginPageSelectors.subheader).getText()).eq(loginPageExpected.subheader);
  });

  it('should verify that username label is displayed', function () {
    expect($(loginPageSelectors.usernameLabel).isDisplayed()).to.be.true;
  });

  it('should verify username label has text "Username"', function () {
  expect($(loginPageSelectors.usernameLabel).getText()).eq(loginPageExpected.username);
  });

  it('should verify that username input field is enable', function () {
    expect($(loginPageSelectors.usernameIF).isEnabled()).to.be.true;
  });

  it('should verify that password label is displayed', function () {
    expect($(loginPageSelectors.passwordLabel).isDisplayed()).to.be.true;
  });

  it('should verify password label has text "Username"', function () {
    expect($(loginPageSelectors.passwordLabel).getText()).eq(loginPageExpected.password);
  });

  it('should verify that password input field is enable', function () {
    expect($(loginPageSelectors.passwordIF).isEnabled()).to.be.true;
  });

  it('should verify that login button is displayed', function () {
    expect($(loginPageSelectors.loginBtn).isDisplayed()).to.be.true;
  });

  it('should verify that login button is clickable', function () {
    expect($(loginPageSelectors.loginBtn).isClickable()).to.be.true;
  });

});
