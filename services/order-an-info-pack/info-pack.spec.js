describe('Order an Info Pack', function () {

  browser.manage().window().maximize();

  var uatWebsite = require('./lib/info-pack.page.js');
  var getProspectButton = require('./lib/info-pack.page.js');
  var clickSubmit = require('./lib/info-pack.page.js');
  var titleValidation = require('./lib/info-pack.page.js');
  var firstNameValidation = require('./lib/info-pack.page.js');
  var lastNameValidation = require('./lib/info-pack.page.js');
  var dobValidation = require('./lib/info-pack.page.js');
  var phoneValidation = require('./lib/info-pack.page.js');
  var emailValidation = require('./lib/info-pack.page.js');
  var postcodeValidation = require('./lib/info-pack.page.js');
  var hearAboutAATValidation = require('./lib/info-pack.page.js');
  var shareDetailsValidation = require('./lib/info-pack.page.js');
  var insertTitle = require('./lib/info-pack.page.js');
  var insertFirstName = require('./lib/info-pack.page.js');
  var insertLastName = require('./lib/info-pack.page.js');
  var insertDOB = require('./lib/info-pack.page.js');
  var insertPhone = require('./lib/info-pack.page.js');
  var insertEmail = require('./lib/info-pack.page.js');
  var insertPostcode = require('./lib/info-pack.page.js');
  var selectHearAboutAAT = require('./lib/info-pack.page.js');
  var selectShareDetails = require('./lib/info-pack.page.js');
  var thankYouPage = require('./lib/info-pack.page.js');

  it('Verify that user is able to access the form via the homepage', function () {
    uatWebsite.uat();
    getProspectButton.getProspectus();

  });

  it('Verify that all mandatory fields function correctly and show the correct error message', function () {
    uatWebsite.uat();
    getProspectButton.getProspectus();
    clickSubmit.submit();
    browser.sleep(5000)
    titleValidation.titleError();
    firstNameValidation.firstNameError();
    lastNameValidation.lastNameError();
    dobValidation.dobError();
    phoneValidation.phoneError();
    emailValidation.emailError();
    postcodeValidation.postcodeError();
    hearAboutAATValidation.hearAboutAATError();
    shareDetailsValidation.shareDetailsError();

  });

  // it('Verify that user is able to submit an info pack', function () {
  //   uatWebsite.uat();
  //   getProspectButton.getProspectus();
  //   insertTitle.titleInput();
  //   insertFirstName.firstNameInput();
  //   insertLastName.lastNameInput();
  //   insertDOB.dobInput();
  //   insertPhone.phoneInput();
  //   insertEmail.emailInput();
  //   insertPostcode.postcodeInput();
  //   selectHearAboutAAT.hearAboutAATInput();
  //   selectShareDetails.shareDetailsInput();
  //   clickSubmit.submit();
  //   thankYouPage.thankyou();

  // });

});