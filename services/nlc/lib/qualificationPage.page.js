class qualificationsPage {

    constructor() { };

    //AQ2016
    qualificationDetails_aq() {
        //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications') 
        //    expect(element(by.css('div[class="panel-heading"]')).getText()).toBe('AAT Accounting Qualifications 2016');

        var trainingProvider = element(by.id('edit-qualifications-aataq2016-training-provider-code'))
        // Change training provider code below to register students to that training provider.
        trainingProvider.$('[value="AH0096"]').click()

        var isDL = element(by.id('edit-qualifications-aataq2016-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-aataq2016-is-full-time-true')).click()
        var startLevel = element(by.id('edit-qualifications-aataq2016-start-level'))
        startLevel.$('[value="AATFOUN"]').click()
        var finishLevel = element(by.id('edit-qualifications-aataq2016-expected-finish-level'))
        finishLevel.$('[value="AATFOUN"]').click()

        var feeFunding = element(by.id('edit-qualifications-aataq2016-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-aataq2016-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-aataq2016-apprenticeship-false')).click()
    };

    //FDAB
    qualificationDetails_fdab() {
        //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications')
        //    expect(element(by.css('div[class="panel-heading"]')).getText()).toBe('Foundation Diploma in Accounting and Business');

        var trainingProvider = element(by.id('edit-qualifications-aatfdab2016-training-provider-code'))
        trainingProvider.$('[value="AH0065"]').click()

        var isDL = element(by.id('edit-qualifications-aatfdab2016-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-aatfdab2016-is-full-time-true')).click()
        var feeFunding = element(by.id('edit-qualifications-aatfdab2016-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-aatfdab2016-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-aatfdab2016-apprenticeship-false')).click()
    };


    //STRAND 1
    qualificationDetails_L1_award_bk() {
        //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications')
        //  element(by.xpath('//*[contains(text(), "Introductory bookkeeping (Level 1 Award in Bookkeeping)")]')).isDisplayed()

        var trainingProvider = element(by.id('edit-qualifications-l1abkk-training-provider-code'))
        trainingProvider.$('[value="BH01000332"]').click()
        var isDL = element(by.id('edit-qualifications-l1abkk-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-l1abkk-is-full-time-true')).click()
        var feeFunding = element(by.id('edit-qualifications-l1abkk-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-l1abkk-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-l1abkk-apprenticeship-false')).click()
    }

    qualificationDetails_foundation_cert_bk() {
        //   expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications')
        //  element(by.xpath('//*[contains(text(), "Foundation Certificate in Bookkeeping")]')).isDisplayed()

        var trainingProvider = element(by.id('edit-qualifications-aatfcb2016-training-provider-code'))
        trainingProvider.$('[value="BH01000332"]').click()
        var isDL = element(by.id('edit-qualifications-aatfcb2016-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-aatfcb2016-is-full-time-true')).click()
        var feeFunding = element(by.id('edit-qualifications-aatfcb2016-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-aatfcb2016-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-aatfcb2016-apprenticeship-false')).click()
    }

    qualificationDetails_advanced_cert_bk() {
        //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications')
        //   element(by.xpath('//*[contains(text(), "Advanced Certificate in Bookkeeping")]')).isDisplayed()

        var trainingProvider = element(by.id('edit-qualifications-aatacb2016-training-provider-code'))
        trainingProvider.$('[value="BH01000332"]').click()
        var isDL = element(by.id('edit-qualifications-aatacb2016-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-aatacb2016-is-full-time-true')).click()
        var feeFunding = element(by.id('edit-qualifications-aatacb2016-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-aatacb2016-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-aatacb2016-apprenticeship-false')).click()
    }

    qualificationDetails_L1_award_comp_acc() {
        //   expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications')
        //   element(by.xpath('//*[contains(text(), "Introductory computerised accounting (Level 1 Award in Computerised Accounting)")]')).isDisplayed()

        var trainingProvider = element(by.id('edit-qualifications-l1aca-training-provider-code'))
        trainingProvider.$('[value="BH01000332"]').click()
        var isDL = element(by.id('edit-qualifications-l1aca-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-l1aca-is-full-time-true')).click()
        var feeFunding = element(by.id('edit-qualifications-l1aca-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-l1aca-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-l1aca-apprenticeship-false')).click()
    }

    qualificationDetails_foundation_award_acc_software() {
        //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications')
        //    element(by.xpath('//*[contains(text(), "Foundation Award in Accounting Software")]')).isDisplayed()

        var trainingProvider = element(by.id('edit-qualifications-aatfaas2016-training-provider-code'))
        trainingProvider.$('[value="BH01000332"]').click()
        var isDL = element(by.id('edit-qualifications-aatfaas2016-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-aatfaas2016-is-full-time-true')).click()
        var feeFunding = element(by.id('edit-qualifications-aatfaas2016-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-aatfaas2016-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-aatfaas2016-apprenticeship-false')).click()
    }

    //STRAND 2
    qualificationDetails_aat_access() {
        //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications')
        //      element(by.xpath('//*[contains(text(), "Entry accounting skills (AAT Access)")]')).isDisplayed()

        var trainingProvider = element(by.id('edit-qualifications-aatacs-training-provider-code'))
        trainingProvider.$('[value="BH01000332"]').click()
        var isDL = element(by.id('edit-qualifications-aatacs-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-aatacs-is-full-time-true')).click()
        var feeFunding = element(by.id('edit-qualifications-aatacs-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-aatacs-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-aatacs-apprenticeship-false')).click()
    }

    qualificationDetails_L1_cer_acc() {
        //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications')
        //     element(by.xpath('//*[contains(text(), "Entry accounting skills (Level 1 Certificate in Accounting)")]')).isDisplayed()

        var trainingProvider = element(by.id('edit-qualifications-l1ciac-training-provider-code'))
        trainingProvider.$('[value="BH01000332"]').click()
        var isDL = element(by.id('edit-qualifications-l1ciac-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-l1ciac-is-full-time-true')).click()
        var feeFunding = element(by.id('edit-qualifications-l1ciac-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-l1ciac-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-l1ciac-apprenticeship-false')).click()
    }

    qualificationDetails_L2_acc_run_own_business() {
        //   expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications')
        //    element(by.xpath('//*[contains(text(), "Introductory business skills (Level 2 Award in Accounting Skills to Run Your Business)")]')).isDisplayed()

        var trainingProvider = element(by.id('edit-qualifications-l2asyb-training-provider-code'))
        trainingProvider.$('[value="BH01000332"]').click()
        var isDL = element(by.id('edit-qualifications-l2asyb-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-l2asyb-is-full-time-true')).click()
        var feeFunding = element(by.id('edit-qualifications-l2asyb-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-l2asyb-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-l2asyb-apprenticeship-false')).click()
    }

    qualificationDetails_L4_dip_business_skills() {
        //   expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/qualifications') 
        //    element(by.xpath('//*[contains(text(), "Higher apprenticeship (Level 4 Diploma in Business Skills)")]')).isDisplayed()

        var trainingProvider = element(by.id('edit-qualifications-aatdbs-training-provider-code'))
        trainingProvider.$('[value="BH01000332"]').click()
        var isDL = element(by.id('edit-qualifications-aatdbs-is-distance-learning-false')).click()
        var FTorPT = element(by.id('edit-qualifications-aatdbs-is-full-time-true')).click()
        var feeFunding = element(by.id('edit-qualifications-aatdbs-aat-fees-funded-student')).click()
        var trainingFunding = element(by.id('edit-qualifications-aatdbs-aat-training-funded-student')).click()
        var apprenticeship = element(by.id('edit-qualifications-aatdbs-apprenticeship-false')).click()
    }

    continueBtn() {
        var continueButton = element(by.id('edit-buttons-next')).click()
    }
};

//exports an instance of the class to use functions on other files
module.exports = new qualificationsPage