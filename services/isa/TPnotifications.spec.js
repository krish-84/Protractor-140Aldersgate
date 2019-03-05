describe('Ensure TPs receive a notification when they make a change to their listing', function () {
    
    browser.manage().window().maximize();
    browser.ignoreSynchronization = true;

    var login = require('../../libs/shared/login.page.js')
    var serviceConfig = require('./config.js')
    var goToTPadminConsole = require('./lib/perms.page.js')
    var goToReportsPage = require('./lib/navigatingAroundAdminConsole.page.js')
    var notificaitonON = require('./lib/navigatingAroundAdminConsole.page.js')
    var goToContactDetailsPage = require('./lib/navigatingAroundAdminConsole.page.js')
    var updateName = require('./lib/updateContactDetails.page.js')
    var updatePhone = require('./lib/updateContactDetails.page.js')
    var updateWebsite = require('./lib/updateContactDetails.page.js')
    var updateFacilities = require('./lib/updateContactDetails.page.js')
    var publishChanges = require('./lib/updateContactDetails.page.js')


    it('Trigger a notification to be sent to the test email inbox - half automated - half manual testing', function () {
        login.login_as(serviceConfig.TPsOnly.NewPatel02, serviceConfig.password.pass);
        var dropdown = element(by.id('edit-centre'));
        dropdown.element(by.cssContainingText('option', 'NewPatel.02')).click();
        browser.sleep(10000)
        goToTPadminConsole.TPadminConsole()
        element(by.buttonText('Change centre')).click();
        element(by.id('centre-picker')).click()
        dropdown = element(by.cssContainingText('option', 'NewPatel.02')).click();
        browser.sleep(5000)
        goToReportsPage.reports()
        notificaitonON.notificationOnOff()
        goToContactDetailsPage.contactDetails()
        updateName.name()
        updatePhone.telephone()
        updateWebsite.website()
        updateFacilities.facilities()
        publishChanges.publish()
        console.log('Check the email notifications have been recevied manually.')
        
    });

});