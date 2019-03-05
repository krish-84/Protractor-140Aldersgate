class validation {

    constructor () {}

    pageLoad () {
        console.log('Page loaded');
        browser.get('https://uat-web.aws.aat.org.uk/register/myaat');
        var title = browser.findElement(by.id('page-title'));
        expect(title.getText()).toBe('Register for an AAT guest account');
    };

    submit () {
        console.log('Clicked submit');
        var submit = element(by.id('edit-register'))
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(submit), 10000).then ( function () {
        submit.click();
        });
    };

    email () {
        console.log('Email error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-myaat-email"]')).getText()).toEqual('Enter email address');
    };

    confirmEmail () {
        console.log('Confimation email error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-myaat-confirm-email"]')).getText()).toEqual('Confirm email address');
    };
    
    password () {
        console.log('Password error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-myaat-password"]')).getText()).toEqual('Enter password');
    };

    confirmPassword () {
        console.log('Confirmation password error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-myaat-password-confirm"]')).getText()).toEqual('Confirm password'); 
    };

    title () {
        console.log('Title error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-personal-details-user-title"]')).getText()).toEqual('Select title'); 
    };

    firstName () {
        console.log('First name error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-personal-details-user-first-name"]')).getText()).toEqual('Enter first name');
    };

    lastName () {
        console.log('Last name error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-personal-details-user-last-name"]')).getText()).toEqual('Enter last name');
    };

    dob () {
        console.log('DOB error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-personal-details-profile-dob"]')).getText()).toEqual('Enter date of birth');
    };

    postcode () {
        console.log('Postcode error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-aat-profile-postcode"]')).getText()).toEqual('Enter postcode');
    };

    address () {
        console.log('Address error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-aat-profile-address-1"]')).getText()).toEqual('Enter address');
    };

    townORregion () {
        console.log('Town or Region error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-aat-profile-town"]')).getText()).toEqual('Enter town or region');
    };

    county () {
        console.log('County error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-aat-profile-county"]')).getText()).toEqual('Select county');
    };

    phone () {
        console.log('Phone error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-contact-details-phone"]')).getText()).toEqual('Enter a phone number');
    };

    country () {
        console.log('Country error');
        expect(element(by.xpath('//label[@class="error"][@for="edit-aat-profile-country"]')).getText()).toEqual('Select country');
        browser.sleep(5000);
    };
    
    selectingCountry () {
        console.log('Country selected');
        var country = element(by.id('edit-aat-profile-country'));
        country.element(by.cssContainingText('option', 'Please select')).click();
    };

};

module.exports = new validation