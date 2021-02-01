const loginPageSelectors = require('../../../data/selectors.json').loginPage;
const loginPageInputPos = require('../../../data/input.json').loginPagePositive;
const loginPageExpected = require('../../../data/expected.json').loginPage;

describe('Login Page positive', function () {
  before(() => {
    browser.url('/login');
    browser.maximizeWindow(); //to avoid overlapping from github banner
  });

  it('should verify that user is able to login successfully with valid credentials', function () {
    $(loginPageSelectors.usernameIF).setValue(loginPageInputPos.username);
    $(loginPageSelectors.passwordIF).setValue(loginPageInputPos.password);
    $(loginPageSelectors.loginBtn).click();
    expect($(loginPageSelectors.messageSuccess).isDisplayed()).to.be.true;
    expect($(loginPageSelectors.logoutBtn).isDisplayed()).to.be.true;
  });

  it('should verify that user is able to close pop up message', function () {
    $(loginPageSelectors.closeBtn).click();
    expect($(loginPageSelectors.messageSuccess).isDisplayed()).to.be.false;
  });

  it('should verify that user is able to logout', function () {
    $(loginPageSelectors.logoutBtn).click();
    expect($(loginPageSelectors.loginBtn).isDisplayed()).to.be.true;
  });
});
