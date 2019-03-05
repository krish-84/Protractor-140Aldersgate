class suitabilityPage {
    constructor() { };

    suitabilityDetails_core() {
      //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/suitability-assessment')
        var bankrupt = element(by.id('edit-declarations-question-35-no')).click()
        var debtReliefOrder = element(by.id('edit-declarations-question-39-no')).click()
        var creditors = element(by.id('edit-declarations-question-40-no')).click()
        var criminalOffence = element(by.id('edit-declarations-question-34-no')).click()
        var civilScanation = element(by.id('edit-declarations-question-36-no')).click()
        var CCJ = element(by.id('edit-declarations-question-38-no')).click()
        var disciplinarySanction = element(by.id('edit-declarations-question-37-no')).click()
        var continueButton = element(by.id('edit-next')).click();
    };

    suitabilityDetails_nonCore() {
      //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/suitability-assessment')
        var criminalOffence = element(by.id('edit-declarations-question-34-no')).click()
        var civilScanation = element(by.id('edit-declarations-question-36-no')).click()
        var disciplinarySanction = element(by.id('edit-declarations-question-37-no')).click()
        var continueButton = element(by.id('edit-next')).click();
    };
};
//exports an instance of the class to use functions on other files
module.exports = new suitabilityPage