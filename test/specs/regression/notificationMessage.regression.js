const notificationMessageSel = require('../../../data/selectors.json').notificationMessages;
const notificationMessageExp = require('../../../data/expected.json').notificationMessage;

describe('Notification message', function () {
    before( () => {
        browser.url('/notification_message_rendered')
    })

    it('should verify that header is displayed', function () {
        expect($(notificationMessageSel.header).isDisplayed()).to.be.true;
    });

    it('should verify that header has text "Notification Message"', function () {
        expect($(notificationMessageSel.header).getText()).eq(notificationMessageExp.header);
    });

    it('should verify that link "click here" is displayed', function () {
        expect($(notificationMessageSel.link).isDisplayed()).to.be.true;
    });

    it('should verify that link has text "click here"', function () {
        expect($(notificationMessageSel.link).getText()).eq(notificationMessageExp.link);
    });

    it('should verify that link "click here" is clickable', function () {
        expect($(notificationMessageSel.link).isClickable()).to.be.true;
    });
});