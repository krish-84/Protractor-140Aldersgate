var EC = protractor.ExpectedConditions;

class InfoPack {

  constructor() {}
  
  uat () {
    console.log('Navigate to UAT');
  	browser.get('https://uat-web.aws.aat.org.uk/');
  };

  getProspectus () {
    console.log('Prospect button')
    element(by.linkText('Get a free course prospectus')).click();
    expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/accounting-qualification/info-pack');
  };

  submit () {
    console.log('Click submit')
    element(by.id('edit-buttons-submit')).click();
    browser.sleep(2000);
  };

  titleError () {
    console.log('Title error message')
    expect(element(by.cssContainingText('label', 'Select title')).isPresent()).toBe(true);
  };
  
  firstNameError () {
    console.log('FN error message')
    expect(element(by.cssContainingText('label', 'Enter first name')).isPresent()).toBe(true);
  };

  lastNameError () {
    console.log('LN error message')
    expect(element(by.cssContainingText('label', 'Enter last name')).isPresent()).toBe(true);
  };

  dobError () {
    console.log('DOB error message')
    expect(element(by.cssContainingText('label', 'Enter date of birth')).isPresent()).toBe(true);
  };

  phoneError () {
    console.log('Phone error message')
    expect(element(by.cssContainingText('label', 'Enter a phone number')).isPresent()).toBe(true);
  };

  emailError () {
    console.log('Email error message')
    expect(element(by.cssContainingText('label', 'Enter email address')).isPresent()).toBe(true);
  };

  postcodeError () {
    console.log('Postcode error messageigate')
    expect(element(by.cssContainingText('label', 'Enter postcode')).isPresent()).toBe(true);
  };

  hearAboutAATError () {
    console.log('Marketing error message')
    expect(element(by.cssContainingText('label', 'Select an option')).isPresent()).toBe(true);
  };

  shareDetailsError () {
    console.log('Shared error message')
    expect(element(by.cssContainingText('label', 'Select an option')).isPresent()).toBe(true);
  };

  titleInput () {
    console.log('Title input')
    element(by.id('edit-personal-details-user-title')).$('[value="Mrs"]').click();
  };

  firstNameInput () {
    console.log('FN input')
    element(by.id('edit-personal-details-user-first-name')).sendKeys('Fname');
  };

  lastNameInput () {
    console.log('LN input')
    element(by.id('edit-personal-details-user-last-name')).sendKeys('Lname');
  };

  dobInput () {
    console.log('DOB input')
    element(by.id('edit-personal-details-profile-dob')).sendKeys('06/10/1994');
  };
 
  phoneInput () {
    console.log('Phone input')
    element(by.id('edit-personal-details-phone')).sendKeys('01234567890');
  };
    
  emailInput () {
    console.log('Email input')
    element(by.id('edit-personal-details-mail')).sendKeys('test@email.qa');
  };

  postcodeInput () {
    console.log('Postcode input')
    element(by.id('edit-address-postcode')).sendKeys('EC1A 4HY');
  };
  
  hearAboutAATInput () {
    console.log('Marketing input')
    element(by.cssContainingText('label', 'College')).click();
  };

  shareDetailsInput () {
    console.log('Shared input')
    element(by.id('edit-other-sharedata-0')).click();
  };

  thankyou () {
    console.log('Thank you page')
    browser.wait(EC.urlContains('/info-pack/thank-you'), 5000); 
    expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/accounting-qualification/info-pack/thank-you');   
  };

};

module.exports = new InfoPack