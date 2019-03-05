class adminConsoleNavigationBar {

    constructor() {}

    home () {
        console.log('Home page');
        element(by.cssContainingText('a', 'Home')).click()
        element(by.cssContainingText('a', 'Home')).click()
        browser.sleep(5000)
    };

    viewListing () {
        console.log('View your listing');
        element(by.className('btn btn-default')).click();
        browser.sleep(5000)
    };
    reports () {
        console.log('Reports');
        element(by.cssContainingText('a', 'Reports')).click()
        browser.sleep(5000)
    };

    notificationOnOff () {
        console.log('Notification set');
        element(by.css('#optionsRadios1[value="false"]')).isSelected().then(function (isVisible) {
            if (isVisible) {
                element(by.css('#optionsRadios1[value="true"]')).click()
                console.log('changed to yes')
            } else {
                console.log("did nothing");
            };
          });
    };
    
    qualifications () {
        console.log('Qualifications');
        element(by.cssContainingText('a', 'Qualifications')).click()
        browser.sleep(2000)
    };

    contactDetails () {
        console.log('Contact Details');
        element(by.cssContainingText('a', 'Contact details and facilities')).click()
        browser.sleep(2000)
    };

    openDays () {
        console.log('Open Days');
        element(by.cssContainingText('a', 'Open days')).click()
        browser.sleep(2000)
    };

    logoAndPhoto () {
        console.log('Logo and photos');
        element(by.cssContainingText('a', 'Logo and photos')).click()
        browser.sleep(2000)
    };

    internationalPartnerships () {
        console.log('International Partnerships');
        element(by.cssContainingText('a', 'International partnerships')).click()
        browser.sleep(2000)
    };
};

module.exports = new adminConsoleNavigationBar