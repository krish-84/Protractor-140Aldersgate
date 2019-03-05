describe('ISA contact login', function (){
    browser.manage().window().maximize();
    browser.ignoreSynchronization = true;

    var login = require('../../libs/shared/login.page.js');
    var serviceConfig = require('./config.js');
    var goToTPadminConsole = require('./lib/perms.page.js')
    var goToEAVadminConsole = require('./lib/perms.page.js')
    var accessToTPadmin = require('./lib/perms.page.js')
    var accessToEAVadmin = require('./lib/perms.page.js')
    var noAccess = require('./lib/perms.page.js')
    var logOut = require('../../libs/shared/login.page.js')

    it('Verify an ISA contact can access the TP Admin console.', function (){
        login.login_as(serviceConfig.TPsOnly.NewPatel01, serviceConfig.password.pass);
        var dropdown = element(by.id('edit-centre'));
        dropdown.element(by.cssContainingText('option', 'NewPatel.01')).click();
        browser.sleep(10000)
        goToTPadminConsole.TPadminConsole()
        accessToTPadmin.shouldGetAccesstoTPadmin()
        logOut.logoutFunction()
    });

    it('Verify an ISA contact can access the EAV Admin console.', function (){
        login.login_as(serviceConfig.EAVsOnly.NewPatel07, serviceConfig.password.pass);
        var dropdown = element(by.id('edit-centre'));
        dropdown.element(by.cssContainingText('option', 'NewPatel.07')).click();
        browser.sleep(10000)
        goToEAVadminConsole.EAVadminConsole()
        accessToEAVadmin.shouldGetAccesstoEAVadmin()
        logOut.logoutFunction()
    });

    it('Verify an TP Main Contact CANNOT access the TP Admin console.', function (){
        login.login_as(serviceConfig.noAccessCentres.TP_MainContact, serviceConfig.password.pass);
        var dropdown = element(by.id('edit-centre'));
        dropdown.element(by.cssContainingText('option', 'TRAILBLAZERS REGISTRATION')).click();
        browser.sleep(10000)
        noAccess.noAccessToAdmin()
        logOut.logoutFunction()
    });

    it('Verify an Exams officer CANNOT access the EAV Admin console.', function (){
        login.login_as(serviceConfig.noAccessCentres.Exams_Officer, serviceConfig.password.pass);
        var dropdown = element(by.id('edit-centre'));
        dropdown.element(by.cssContainingText('option', 'TRAILBLAZERS REGISTRATION')).click();
        browser.sleep(10000)
        noAccess.noAccessToAdmin()
        logOut.logoutFunction()
    });

});