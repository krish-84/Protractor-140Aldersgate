describe('Guest registration validation', function () {

  beforeEach(function () {
    browser.ignoreSynchronization = true;

  });

    var URL = require('./lib/validation.page.js');
    var clickSubmit = require('./lib/validation.page.js');
    var emailValidation = require('./lib/validation.page.js');
    var confirmEmailValidation = require('./lib/validation.page.js');
    var passwordValidation = require('./lib/validation.page.js');
    var confirmPasswordValidation = require('./lib/validation.page.js');
    var titleValidation = require('./lib/validation.page.js');
    var firstNameValidation = require('./lib/validation.page.js');
    var lastNameValidation = require('./lib/validation.page.js');
    var dobValidation = require('./lib/validation.page.js');
    var postcodeValidation = require('./lib/validation.page.js');
    var addressValidation = require('./lib/validation.page.js');
    var townORregionValidation = require('./lib/validation.page.js');
    var countyValidation = require('./lib/validation.page.js');
    var phoneValidation = require('./lib/validation.page.js');
    var countryValidation = require('./lib/validation.page.js');
    var changeCountry = require('./lib/validation.page.js');
  
  it('Verify that the Guest Registration page is loaded correctly', function () {
    URL.pageLoad();

  });

  it('Verify all the validation on the Guest Registration form', function () {
    clickSubmit.submit();
    emailValidation.email();
    confirmEmailValidation.confirmEmail();
    passwordValidation.password();
    confirmPasswordValidation.confirmPassword();
    titleValidation.title();
    firstNameValidation.firstName();
    lastNameValidation.lastName();
    dobValidation.dob();
    postcodeValidation.postcode();
    addressValidation.address();
    townORregionValidation.townORregion();
    countyValidation.county();
    phoneValidation.phone();
    changeCountry.selectingCountry();
    clickSubmit.submit();
    countryValidation.country();
  
  });
  
});


