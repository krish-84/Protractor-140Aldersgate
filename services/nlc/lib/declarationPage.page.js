class declarationPage {
    constructor() {};

    declarationDetails() {
    //    expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/declaration')
            //need to verfiy declaration text 
        var acceptDeclaration = element(by.id('edit-declaration-accept')).click()
        var continueButton = element(by.id('edit-next')).click();
    };
};
//exports an instance of the class to use functions on other files
module.exports = new declarationPage