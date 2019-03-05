/**
 * 
 * Register new student on registeration service  
 * set up to run on UAT 
 * 
 * @author Alka Kumar>
 * @author edited by Tarren Patel>
 */
/*
    _   ____    ______   __                         
   / | / / /   / ____/  / /   ____  ____  ____      
  /  |/ / /   / /      / /   / __ \/ __ \/ __ \     
 / /|  / /___/ /___   / /___/ /_/ / /_/ / /_/ /     
/_/ |_/_____/\____/  /_____/\____/\____/ .___/      
                                      /_/           
*/

describe('registration service', function () {
// all you need to do is change the value where i is less than (<) x - where x is the amount of students you want to register
    for (var i = 0; i < 1; i++) { 

        beforeEach(function () {
            browser.ignoreSynchronization = true;
            
        });

        it('should register new student on AQ2016', function () {
            //calling page functions
            browser.get('https://uat-web.aws.aat.org.uk/user/logout');
            // alka added this as a failsafe if previous test deosnt tear down
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

            // newReg.startNewReg()
            startPage.startRegDetails()
            qualificationPicker.qualPicker_AQ2016()
            qualificationPage.continueBtn()

            fakerData.personalDetails()

            qualificationPage.qualificationDetails_aq()
            qualificationPage.continueBtn()

            educationPage.educationDetails()
            educationPage.educationQs_aq()
            educationPage.continueBtn()

            employmentPage.employmentDetails()
            suitabilityPage.suitabilityDetails_core()
            declarationPage.declarationDetails()

            expect(payment.isPricePresent("Membership fee", "£92.00")).toEqual(true)
            expect(payment.isPricePresent("Admission fee", "£43.00")).toEqual(true)
            expect(payment.isPricePresent("TOTAL PAYABLE", "£135.00")).toEqual(true)
            payment.contiuneBtn()
            payment.datacashPage()
            completeReg.completeReg()
        });
    }
});