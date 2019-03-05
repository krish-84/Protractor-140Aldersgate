/**
 * 
 * new student register on all of strand 2
 * 
 * 
 * @author Alka Kumar>
 * @author edited by Tarren Patel>
 * 
 */

xdescribe('registration service', function () {
    for (var i = 0; i < 1; i++) {

        beforeEach(function () {
            browser.ignoreSynchronization = true;
            
        });

        it('should register new student on all of strand 2', function () {
            //calling page functions
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
            qualificationPicker.qualPicker_allStrand2()
            qualificationPage.continueBtn()
            fakerData.personalDetails()

            qualificationPage.qualificationDetails_aat_access()
            qualificationPage.qualificationDetails_L1_cer_acc()
            qualificationPage.qualificationDetails_L2_acc_run_own_business()
            qualificationPage.qualificationDetails_L4_dip_business_skills()
            qualificationPage.continueBtn()

            educationPage.educationDetails()
            educationPage.continueBtn()

            employmentPage.employmentDetails()
            suitabilityPage.suitabilityDetails_nonCore()
            declarationPage.declarationDetails()

            expect(payment.isPricePresent("Subscription fee", "£40.00")).toEqual(true)
            expect(payment.isPricePresent("TOTAL PAYABLE", "£40.00")).toEqual(true)
            payment.contiuneBtn()
            payment.datacashPage()

            completeReg.completeReg()
        });
    }
});