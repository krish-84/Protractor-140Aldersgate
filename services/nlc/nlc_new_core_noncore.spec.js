/**
 * 
 * new student on core and non-core
 * 
 * 
 * @author Alka Kumar>
 * 
 */

xdescribe('registration service', function () {

    for (var i = 0; i < 1; i++) {

        beforeEach(function () {
            browser.ignoreSynchronization = true;
            
        });

        it('should register new student on aq and all of strand 1', function () {
            browser.get('https://uat-web.aws.aat.org.uk/user/logout');
            
            browser.get('https://uat-web.aws.aat.org.uk/register/student');
            var newReg = require('./lib/newReg.page')
            var startPage = require('./lib/regStartPage.page')
            var qualificationPicker = require('./lib/qualPicker.page')
            var fakerData = require('./lib/faker.page')
            var qualificationPage = require('./lib/qualificationPage.page')
            var educationPage = require('./lib/educationPage.page')
            var employmentPage = require('./lib/employmentPage.page')
            var suitabilityPage = require('./lib/suitabilityPage.page')
            var declarationPage = require('./lib/declarationPage.page')
            var payment = require('./lib/payment.page')
            var completeReg = require('./lib/completeReg.page')
            newReg.startNewReg()
            startPage.startRegDetails()
            qualificationPicker.qualPicker_AQ2016()
            qualificationPicker.qualPicker_allStrand1()
            qualificationPage.continueBtn()
            fakerData.personalDetails()

            qualificationPage.qualificationDetails_aq()
            qualificationPage.qualificationDetails_L1_award_bk()
            qualificationPage.qualificationDetails_foundation_cert_bk()
            qualificationPage.qualificationDetails_advanced_cert_bk()
            qualificationPage.qualificationDetails_L1_award_comp_acc()
            qualificationPage.qualificationDetails_foundation_award_acc_software()
            qualificationPage.continueBtn()

            educationPage.educationDetails()
            educationPage.educationQs_aq()
            educationPage.continueBtn()

            employmentPage.employmentDetails()
            suitabilityPage.suitabilityDetails_core()
            declarationPage.declarationDetails()

            expect(payment.isPricePresent("Membership fee", "£90.00")).toEqual(true)
            expect(payment.isPricePresent("Admission fee", "£41.00")).toEqual(true)
            expect(payment.isPricePresent("TOTAL PAYABLE", "£131.00")).toEqual(true)
            payment.contiuneBtn()
            payment.datacashPage()
            completeReg.completeReg()
        });
    }
});