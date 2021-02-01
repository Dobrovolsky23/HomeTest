const addRemoveElSelectors = require('../../../data/selectors.json').addRemoveElements;

describe('Add/Remove Elements', function () {
  before(() => {
    browser.url('/add_remove_elements/');
  });

  it('should verify that "Delete button" appears if "Add button" is clicked', function () {
    $(addRemoveElSelectors.addElementBtn).click();
    expect($(addRemoveElSelectors.deleteBtn).isDisplayed()).eq(true);
  });

  it('should verify that "Delete button" is disappears if you click on it', function () {
    browser.refresh();
    $(addRemoveElSelectors.addElementBtn).click();
    $(addRemoveElSelectors.deleteBtn).click();
    expect($(addRemoveElSelectors.deleteBtn).isDisplayed()).eq(false);
  });
});
