describe('Registering students for EPA', function () {
    browser.manage().window().maximize();

    var login = require('../../libs/shared/login.page.js')
    var serviceConfig = require('./config.js')
    var accessEPA = require('./lib/epa-register-student.page.js')
    var selectCentre = require('./lib/epa-register-student.page.js')
    var EPAL3 = require('./lib/epa-register-student.page.js')
    var EPAL4 = require('./lib/epa-register-student.page.js')
    var addStudent = require('./lib/epa-register-student.page.js')
    var next = require('./lib/epa-register-student.page.js')
    var addEmployer = require('./lib/epa-register-student.page.js')
    var addPayment = require('./lib/epa-register-student.page.js')
    var submit = require('./lib/epa-register-student.page.js')

    it('Verify that user is able to register their students on EPA', function () {
        login.login_as(serviceConfig.TPmainContact.Runshaw_College, serviceConfig.password.pass);
        var dropdown = element(by.id('edit-centre'));
        dropdown.element(by.cssContainingText('option', 'Runshaw College')).click();
        browser.sleep(3000)
        accessEPA.epaRegLink()
        EPAL3.selectingEPAlevel3()
        addStudent.selectingStudents()
        next.clickNext()
        addEmployer.employerDetails()
        next.clickNext()
        addPayment.paymentPage()
        submit.clickSubmit()

    });

});