// ExpectedConditions are use for explicit waits - refer to API docs
var EC = protractor.ExpectedConditions;

class LoginPage {

  constructor() {};

  open() {
    //opens up the login page
    browser.get('https://uat-web.aws.aat.org.uk/login');
  }

  // allows you to pass env vars as arguments in the script/spec
  login_as(email, password) {
    this.open()
    var EmailField = browser.element(by.id('edit-name'));
    var PassField = browser.element(by.id('edit-pass'));
    var SubmitButton = browser.element(by.id('edit-submit'));
    EmailField.sendKeys(email); 
    PassField.sendKeys(password);
    SubmitButton.click();
    browser.wait(EC.urlContains('/users'), 10000); // added an explicit wait as site much slow 
  };

  logout() {
    browser.get('https://uat-web.aws.aat.org.uk/user/logout');
  }

  logoutFunction () {
    console.log('called - logoutFunction');
    // element(by.className('account__logout')).click()
    browser.get('https://uat-web.aws.aat.org.uk/user/logout');
};

};

//exports an instance of the class to use functions on other files
module.exports = new LoginPage