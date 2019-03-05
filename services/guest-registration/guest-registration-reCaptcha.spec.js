describe('Guest registration reCaptcha', function () {

  beforeEach(function () {
    browser.ignoreSynchronization = true;
    
  });

    var URL = require('./lib/validation.page.js');
    var clickSubmit = require('./lib/validation.page.js');
    var formEmail = require('./lib/formFiller.page.js');
    var formConfirmEmail = require('./lib/formFiller.page.js');
    var formPassword = require('./lib/formFiller.page.js');
    var formConfirmPassword = require('./lib/formFiller.page.js');
    var formTitle = require('./lib/formFiller.page.js');
    var formFirstName = require('./lib/formFiller.page.js');
    var formLastName = require('./lib/formFiller.page.js');
    var formDob = require('./lib/formFiller.page.js');
    var formPoscode = require('./lib/formFiller.page.js');
    var formAddress1 = require('./lib/formFiller.page.js');
    var formAddress2 = require('./lib/formFiller.page.js');
    var formAddress3 = require('./lib/formFiller.page.js');
    var formTownOrRegion = require('./lib/formFiller.page.js');
    var formPhone = require('./lib/formFiller.page.js');
    var reCaptcha = require('./lib/reCaptcha.page.js');

  it('Verify that the Guest Registration page is loaded correctly', function () {
    URL.pageLoad();

  });

  it('Verify registration cannot be submitted if reCaptcha has not been done', function () {
    formEmail.completeEmail();
    formConfirmEmail.completeConfirmEmail();
    formPassword.completePassword();
    formConfirmPassword.completeConfirmPassword();
    formTitle.completeTitle();
    formFirstName.completeFirstName();
    formLastName.completeLastName();
    formDob.completeDob();
    formPoscode.completePostcode();
    formAddress1.completeAddress1();
    formAddress2.completeAddress1();
    formAddress3.completeAddress3();
    formTownOrRegion.completeTownOrRegion();
    formPhone.compeletePhone();
    clickSubmit.submit();
    reCaptcha.cannotSubmitWithoutRecaptcha();

  });
  
});