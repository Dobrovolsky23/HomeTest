const dynamicControlSelectors = require('../../../data/selectors.json').dynamicControls;
const dynamicControlExpected = require('../../../data/expected.json').dynamicControls;

describe('Dynamic Controls smoke', function () {
  before(() => {
    browser.url('/dynamic_controls');
  });

  it('should verify that when you click Remove button it removes the checkbox', function () {
    $(dynamicControlSelectors.removeBtn).click();
    $(dynamicControlSelectors.message).waitForDisplayed();
    expect($(dynamicControlSelectors.message).getText()).eq(dynamicControlExpected.removeMessage);
    expect($(dynamicControlSelectors.checkbox).isDisplayed()).eq(false);
  });

  // it('should verify that when the remove request has been sent, loading bar is displayed', function () {
  //   $(dynamicControlSelectors)
  // });

  it('should verify that when you click Add button it restores the checkbox', function () {
    $(dynamicControlSelectors.removeBtn).click();
    $(dynamicControlSelectors.message).waitForDisplayed();
    expect($(dynamicControlSelectors.message).getText()).eq(dynamicControlExpected.addMessage);
    expect($(dynamicControlSelectors.checkbox).isDisplayed()).eq(true);
  });

  it('should enable the input field by clicking Enable button', function () {
    $(dynamicControlSelectors.enableBtn).click();
    $(dynamicControlSelectors.message).waitForDisplayed();
    expect($(dynamicControlSelectors.inputField).isEnabled()).eq(true);
    expect($(dynamicControlSelectors.message).getText()).eq(dynamicControlExpected.enableMessage);
  });

  it('should disable the input field by clicking Disable button', function () {
    $(dynamicControlSelectors.enableBtn).click();
    $(dynamicControlSelectors.message).waitForDisplayed();
    expect($(dynamicControlSelectors.inputField).isEnabled()).eq(false );
    expect($(dynamicControlSelectors.message).getText()).eq(dynamicControlExpected.disableMessage);
  });
});
