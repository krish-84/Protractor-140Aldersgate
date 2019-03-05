/**
 * 
 * new student register on all of strand 1
 * 
 * 
 * @author Alka Kumar & Tarren Patel>
 * @author edited by Tarren Patel>
 */

xdescribe('registration service', function () {

    for (var i = 0; i < 1; i++) {

        beforeEach(function () {
            browser.ignoreSynchronization = true;

        });

        it('should register new student on all of strand 1', function () {
            //calling page functions - take you back to web-ui folder, then into nlc folder and then into the functions repo folder
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
            qualificationPicker.qualPicker_allStrand1()
            qualificationPage.continueBtn()
            fakerData.personalDetails()

            qualificationPage.qualificationDetails_L1_award_bk()
            qualificationPage.qualificationDetails_foundation_cert_bk()
            qualificationPage.qualificationDetails_advanced_cert_bk()
            qualificationPage.qualificationDetails_L1_award_comp_acc()
            qualificationPage.qualificationDetails_foundation_award_acc_software()
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