class completeReg {
    constructor() {};

    completeReg() {
      //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/complete')
        var finish = element(by.id('edit-return')).click()
    };
};
//exports an instance of the class to use functions on other files
module.exports = new completeReg