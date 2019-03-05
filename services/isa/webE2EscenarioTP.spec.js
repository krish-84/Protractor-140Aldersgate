describe('Change in TP admin console updates users listing', function (){
    browser.manage().window().maximize();
    browser.ignoreSynchronization = true;

    var login = require('../../libs/shared/login.page.js')
    var serviceConfig = require('./config.js')
    var goToTPadminConsole = require('./lib/perms.page.js')
    var goToContactDetailsPage = require('./lib/navigatingAroundAdminConsole.page.js')
    var updateName = require('./lib/updateContactDetails.page.js')
    var updatePhone = require('./lib/updateContactDetails.page.js')
    var updateWebsite = require('./lib/updateContactDetails.page.js')
    var updateFacilities = require('./lib/updateContactDetails.page.js')
    var publishChanges = require('./lib/updateContactDetails.page.js')
    var goToHomePage = require('./lib/navigatingAroundAdminConsole.page.js')
    var goToViewYourListing = require('./lib/listingChecks.page.js')
    var checkingInfoOnListing = require('./lib/listingChecks.page.js')

    it('Verify that when an TP updates their listing in the Admin console it is updated on the front end', function () {
        login.login_as(serviceConfig.TPsOnly.NewPatel17, serviceConfig.password.pass);
        var dropdown = element(by.id('edit-centre'));
        dropdown.element(by.cssContainingText('option', 'NewPatel.17')).click();
        browser.sleep(10000)
        goToTPadminConsole.TPadminConsole()
        element(by.buttonText('Change centre')).click();
        element(by.id('centre-picker')).click()
        var dropdown = element(by.id('centre-picker'));
        dropdown.element(by.cssContainingText('option', 'NewPatel.17')).click();
        browser.sleep(2000)
        goToContactDetailsPage.contactDetails()
        updateName.name()
        updatePhone.telephone()
        updateWebsite.website()
        updateFacilities.facilities()
        publishChanges.publish()

    });

    it('Verify the changes have been applied successfully', function () {
        goToViewYourListing.goToTPListing()
        checkingInfoOnListing.correctContactName()
        checkingInfoOnListing.correctPhoneNumber()
        checkingInfoOnListing.correctWebsite()
        
    });
        
});