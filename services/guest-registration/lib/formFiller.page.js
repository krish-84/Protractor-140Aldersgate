class form {

    constructor () {}

    completeEmail () {
        console.log('Email added');
        element(by.id('edit-myaat-email')).sendKeys('guest-01@aat-test.org.uk');
    };

    completeConfirmEmail () {
        console.log('Email confirmation added');
        element(by.id('edit-myaat-confirm-email')).sendKeys('guest-01@aat-test.org.uk');
    };

    completePassword () {
        console.log('Password added');
        element(by.id('edit-myaat-password')).sendKeys('Password90');
    };

    completeConfirmPassword () {
        console.log('Password confirmation added');
        element(by.id('edit-myaat-password-confirm')).sendKeys('Password90');
    };

    completeTitle () {
        console.log('Title added');
        var title = element(by.id('edit-personal-details-user-title'));
        title.$('[value="Miss"]').click();
    };

    completeFirstName () {
        console.log('First name added');
        element(by.id('edit-personal-details-user-first-name')).sendKeys('GuestReg');
    };

    completeLastName () {
        console.log('Last name added');
        element(by.id('edit-personal-details-user-last-name')).sendKeys('One');
    };

    completeDob () {
        console.log('DOB added');
        element(by.id('edit-personal-details-profile-dob')).sendKeys('01/01/1988');
    };

    completePostcode () {
        console.log('Postcode added');
        element(by.id('edit-aat-profile-postcode')).sendKeys('EC1A 4HY');
    };

    completeAddress1 () {
        console.log('Address 1 added');
        element(by.id('edit-aat-profile-address-1')).sendKeys('Address line 1');
    };

    completeAddress2 () {
        console.log('Address 2 added');
        element(by.id('edit-aat-profile-address-2')).sendKeys('Address line 2');
    };

    completeAddress3 () {
        console.log('Address 3 added');
        element(by.id('edit-aat-profile-address-3')).sendKeys('Address line 3');
    };

    completeTownOrRegion () {
        console.log('Town or Region added');
        element(by.id('edit-aat-profile-town')).sendKeys('London');
    };

    compeletePhone () {
        console.log('Phone added');
        element(by.id('edit-contact-details-phone')).sendKeys('12121212');
    };

};

module.exports = new form