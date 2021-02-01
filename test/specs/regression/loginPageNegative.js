const loginPageSelectors = require('../../../data/selectors.json').loginPage;
const loginPageInputPNeg = require('../../../data/input.json').loginPageNegative;

describe('Login Page positive', function () {
  before(() => {
    browser.url('/login');
  });

  it('should verify that user is unable to login successfully with invalid credentials', function () {
    $(loginPageSelectors.usernameIF).setValue(loginPageInputPNeg.username);
    $(loginPageSelectors.passwordIF).setValue(loginPageInputPNeg.password);
    $(loginPageSelectors.loginBtn).click();
    expect($(loginPageSelectors.messageFail).isDisplayed()).to.be.true;
    expect($(loginPageSelectors.logoutBtn).isDisplayed()).to.be.false;
  });
});
