class updatingContactDetailsPage {
    constructor() {}

    name() {
        console.log('name');
        // Edit below accordingly.
        element(by.id('contactName')).clear().sendKeys('Tarren Dhruve Patel')
        browser.sleep(500)
    };

    telephone() {
        console.log('telephone');
        // Edit below accordingly.
        element(by.id('phone')).clear().sendKeys('0123456789')
        browser.sleep(500)
    };

    website() {
        console.log('website');
        // Edit below accordingly.
        element(by.id('website')).clear().sendKeys('http://www.aat.org.uk')
        browser.sleep(500)
    };

    facilities() {
        console.log('facilities');
        // Just comment out which ones you do NOT want to select.
        element(by.cssContainingText('label', 'Free parking')).click()
        element(by.cssContainingText('label', 'Accessible by public transport')).click()
        element(by.cssContainingText('label', 'Free WiFi')).click()
        element(by.cssContainingText('label', 'Cafeteria')).click()
        element(by.cssContainingText('label', 'Recruitment service')).click()
        element(by.cssContainingText('label', 'Disabled access')).click()
    };

    save() {
        console.log('save');
        element(by.buttonText('Save')).click()
        browser.sleep(5000)
        expect(element(by.className('alert alert-success')).getText()).toBe('Changes have been saved')
        browser.sleep(2000)
    }

    publish() {
        console.log('publish');
        element(by.buttonText('Publish changes')).click()
        browser.sleep(5000)
        expect(element(by.className('alert alert-success')).getText()).toBe('Changes have been published')
    };
};

module.exports = new updatingContactDetailsPage