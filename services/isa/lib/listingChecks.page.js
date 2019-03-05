class longListingChecks {

    constructor() {};

    goToEAVListing() {
        console.log('Go to EAVs listing')
        // Change the EAV's name at the end of the URL below
        browser.get('https://uat-web.aws.aat.org.uk/training-providers/#/assessment-venues/newpatel05');
        browser.sleep(3000)
        // Change the EAV centre name here for assertion
        expect(element(by.tagName('h1')).getText()).toBe('NewPatel.05');
    };
    
    goToTPListing() {
        console.log('Go to TPs listing')
        // Change the TP's name at the end of the URL below
        browser.get('https://uat-web.aws.aat.org.uk/training-providers/#/training-providers/newpatel17');
        browser.sleep(3000)
        // Change the TP centre name here for assertion
        expect(element(by.tagName('h1')).getText()).toBe('NewPatel.17');
    };

    correctContactName() {
        console.log('correct contant name is displayed')
        expect(element(by.xpath('//*[@id="about"]/div/div[1]/div/p[3]')).getText()).toBe('Tarren Dhruve Patel');
    };

    correctPhoneNumber() {
        console.log('correct phone number is displayed')
        expect(element(by.xpath('//*[@id="about"]/div/div[1]/div/p[1]')).getText()).toBe('0123456789');
    };

    correctWebsite() {
        console.log('correct website is displayed')
        expect(element(by.xpath('//*[@id="about"]/div/div[1]/div/p[2]/strong/a')).getText()).toBe('http://www.aat.org.uk');
    };
    

}

module.exports = new longListingChecks  