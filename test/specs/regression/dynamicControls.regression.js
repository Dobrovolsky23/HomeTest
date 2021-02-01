const dynamicControlSelectors = require('../../../data/selectors.json').dynamicControls;
const dynamicControlExpected = require('../../../data/expected.json').dynamicControls;

describe('Dynamic Controls regression', function () {
  before(() => {
    browser.url('/dynamic_controls');
  });

  it('should verify that header is displayed', function () {
    expect($(dynamicControlSelectors.header).isDisplayed()).to.be.true;
  });

  it('should verify that header has text "Dynamic Controls"', function () {
    expect($(dynamicControlSelectors.header).getText()).eq(dynamicControlExpected.header);
  });

  it('should verify that subheader "Remove/add" is displayed', function () {
    expect($(dynamicControlSelectors.subheaderRemoveAdd).isDisplayed()).to.be.true;
  });

  it('should verify that subheader "Remove/add" has text = "Remove/add"', function () {
    expect($(dynamicControlSelectors.subheaderRemoveAdd).getText()).eq(
      dynamicControlExpected.subheaderRemoveAdd,
    );
  });

  it('should verify that checkbox is displayed', function () {
    expect($(dynamicControlSelectors.checkbox).isDisplayed()).to.be.true;
  });

  it('should verify that checkbox has text " A checkbox"', function () {
    expect($(dynamicControlSelectors.checkbox).getText()).eq(dynamicControlExpected.checkbox);
  });

  it('should verify that remove button displayed', function () {
    expect($(dynamicControlSelectors.removeBtn).isDisplayed()).to.be.true;
  });

  it('should verify that remove button has text "Remove"', function () {
    expect($(dynamicControlSelectors.removeBtn).getText()).eq(dynamicControlExpected.removeBtn);
  });

  it('should verify that remove button is clickable', function () {
    expect($(dynamicControlSelectors.removeBtn).isClickable()).to.be.true;
  });

  it('should verify that subheader "Enable/disable" is displayed', function () {
    expect($(dynamicControlSelectors.subheaderEnableDisable).isDisplayed()).to.be.true;
  });

  it('should verify that subheader "Enable/disable" has text = "Enable/disable"', function () {
    expect($(dynamicControlSelectors.subheaderEnableDisable).getText()).eq(
      dynamicControlExpected.subheaderEnableDisable,
    );
  });

  it('should that input field is displayed', function () {
    expect($(dynamicControlSelectors.inputField).isDisplayed()).to.be.true;
  });

  it('should verify that enable button displayed', function () {
    expect($(dynamicControlSelectors.enableBtn).isDisplayed()).to.be.true;
  });

  it('should verify that enable button has text "Enable"', function () {
    expect($(dynamicControlSelectors.enableBtn).getText()).eq(dynamicControlExpected.enableBtn);
  });

  it('should verify that enable button is clickable', function () {
    expect($(dynamicControlSelectors.enableBtn).isClickable()).to.be.true;
  });
});
