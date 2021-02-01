const addRemoveElSelectors = require('../../../data/selectors.json').addRemoveElements;
const addRemoveELExpected = require('../../../data/expected.json').addRemoveElements;

describe('Add/Remove Elements', function () {
    before(() => {
        browser.url('/add_remove_elements/');
    });

    it('should verify that the header "Add/Remove Elements" is displayed', function () {
        expect($(addRemoveElSelectors.header).isDisplayed()).eq(true);
    });

    it('should verify that the header text = "Add/Remove Elements"', function () {
        expect($(addRemoveElSelectors.header).getText()).eq(addRemoveELExpected.header);
    });

    it('should verify that "Add button" is displayed', function () {
        expect($(addRemoveElSelectors.addElementBtn).isDisplayed()).eq(true);
    });

    it('should verify that the button for adding an element has text "Add button"', function () {
        expect($(addRemoveElSelectors.addElementBtn).getText()).eq(addRemoveELExpected.addBtn);
    });

    it('should verify that "Add button" is clickable', function () {
        expect($(addRemoveElSelectors.addElementBtn).isClickable()).eq(true);
    });

    it('should verify that button for deleting element has text "Delete"', function () {
        $(addRemoveElSelectors.addElementBtn).click();
        expect($(addRemoveElSelectors.deleteBtn).getText()).eq(addRemoveELExpected.deleteBtn);
    });

    it('should verify that "Delete" button is clickable', function () {
        expect($(addRemoveElSelectors.deleteBtn).isClickable()).eq(true);
    });
});
