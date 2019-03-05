// This works but need to find a valid centre to run.

xdescribe('TP upgrade/downgrade on Web', function (){
    browser.manage().window().maximize();
    browser.ignoreSynchronization = true;

    var login = require('../../libs/shared/login.page.js')
    var serviceConfig = require('./config.js')
    var goToTPadminConsole = require('./lib/perms.page.js')
    var goToSubPage = require('./lib/changingSubscription.page.js')
    var subChange = require('./lib/changingSubscription.page.js')
    var goToHomePage = require('./lib/navigatingAroundAdminConsole.page.js')
    var logOut = require('../../libs/shared/login.page.js')

    // TO RUN THIS SCRIPT PLEASE UPDATE changingSubscription.page.js FUNCTIONS TO SUIT THE TEST

    it('Verify that user can upgrade their subscription via the web', function () {
        login.login_as(serviceConfig.TPsOnly.NewPatel10, serviceConfig.password.pass);
        var dropdown = element(by.id('edit-centre'));
        dropdown.element(by.cssContainingText('option', 'NewPatel.10')).click();
        browser.sleep(10000)
        goToTPadminConsole.TPadminConsole()
        element(by.buttonText('Change centre')).click();
        element(by.id('centre-picker')).click()
        var dropdown = element(by.id('centre-picker'));
        dropdown.element(by.cssContainingText('option', 'NewPatel.10')).click();
        browser.sleep(2000)
        goToSubPage.viewSubscriptionPage()
        subChange.changeSub()
        goToHomePage.home()
        logOut.logoutFunction()
    });
}); 