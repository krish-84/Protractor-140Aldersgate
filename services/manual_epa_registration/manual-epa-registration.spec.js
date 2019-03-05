describe('Manual EPA Registration', function () {

  var EpaRegistration = require('./lib/manual-registration.page');

  beforeEach(function () {
    browser.ignoreSynchronization = true;

  });

  // basic test that checks all fields are present and madatory with alerts
  // does not verify the alert string - better example in order-an-info-pack
  
  it('Verify that the validation on all fields are correct', function () {
    EpaRegistration.input_special();
  
  });

});