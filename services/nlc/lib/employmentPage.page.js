class employmentPage {
    constructor() {};

    employmentDetails() {
      //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/employment')

        var currentSituation = element(by.id('edit-employment-details-about-you'))
        currentSituation.$('[value="None of the above"]').click()
        var continueButton = element(by.id('edit-next')).click();
    };
};
//exports an instance of the class to use functions on other files
module.exports = new employmentPage