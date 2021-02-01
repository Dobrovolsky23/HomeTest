const notificationMessageSel = require('../../../data/selectors.json').notificationMessages;

describe('Notification Message ', function () {
    before( () => {
        browser.url('/notification_message_rendered');
        browser.maximizeWindow();
    })

    it('should verify that by clicking link "click here" the message pops up ', function () {
    $(notificationMessageSel.link).click();
    expect($(notificationMessageSel.message).isDisplayed()).to.be.true;
    });

    it('should verify that user is able to close a pop up message', function () {
        $(notificationMessageSel.closeBtn).click();
        browser.waitUntil(() => !$(notificationMessageSel.message).isDisplayed(), {timeout:5000})
        expect($(notificationMessageSel.message).isDisplayed()).to.be.false;
    });
});