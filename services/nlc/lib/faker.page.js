class fakerData {

    constructor() {};

    personalDetails() {
        var faker = require('faker');

        var randomFirstName = faker.name.firstName();
        element(by.id('edit-personal-details-user-first-name')).sendKeys(randomFirstName)

        //personal details section  
      //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/personal-details')
            //  expect(element(by.css('div[class="qualpicker-inner"]')).getText()).toBe('AAT Accounting Qualifications 2016');
            //  expect(element(by.css('div[class="panel-title fieldset-legend"]')).getText()).toBe('Personal details');

        //function to select from dropdown box 
        var select = element(by.id('edit-personal-details-user-title'));
        select.$('[value="Miss"]').click()

        var randomLastName = faker.name.lastName();
        element(by.id('edit-personal-details-user-last-name')).sendKeys(randomLastName)

        var gender = element(by.id('edit-personal-details-profile-gender-female')).click();
        var DoB = element(by.id('edit-personal-details-profile-dob')).sendKeys('21/08/1992')
        var language = element(by.id('edit-personal-details-profile-english-first-language-yes')).click()
        var ethnicity = element(by.id('edit-personal-details-profile-ethnic-background'))
        ethnicity.$('[value="Other ethnic group"]').click();
        var country = element(by.id('edit-aat-profile-country'))
        country.$('[value="GBR"]').click();
        var ukPostcode = element(by.id('edit-aat-profile-postcode')).sendKeys('EC1A4HY')

        var randomStreetName = faker.address.streetName();
        element(by.id('edit-aat-profile-address-1')).sendKeys(randomStreetName)

        var randomTown = faker.address.county();
        element(by.id('edit-aat-profile-town')).sendKeys(randomTown)

        var county = element(by.id('edit-aat-profile-county'));
        county.$('[value="Central"]').click()

        var phone = element(by.id('edit-contact-details-phone')).sendKeys('0123456789')
        var no = element(by.id('edit-learner-numbers-do-you-have-learner-number-no')).click()
        var continueButton = element(by.id('edit-next')).click();

    };
};

//exports an instance of the class to use functions on other files
module.exports = new fakerData