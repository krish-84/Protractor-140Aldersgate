var EC = protractor.ExpectedConditions;

class checkingShortlistInfo {
    constructor () {}

    verifyShortlistInfo () {
        console.log('verifyShortlistInfo');
        //Test that as a prospect/student I can select up to 3 TPs to compare their offerings.
        expect(element(by.className('tp-shortlist__header--title')).getText()).toBe('Shortlist (3)')
        expect(element(by.className('tp-shortlist__header--gray')).getText()).toBe('You can compare up to three courses in your shortlist.')
        expect(element(by.cssContainingText('strong', 'Enrolment date')).isPresent()).toBe(true)
        expect(element(by.cssContainingText('strong', 'Costs')).isPresent()).toBe(true)
        expect(element(by.cssContainingText('strong', 'Hours per week')).isPresent()).toBe(true)
        expect(element(by.cssContainingText('strong', 'Assessments sat at this location')).isPresent()).toBe(true)
        expect(element(by.cssContainingText('strong', 'Method of study')).isPresent()).toBe(true)
        expect(element(by.cssContainingText('strong', 'Distance from your location')).isPresent()).toBe(true)
        expect(element(by.xpath('/html/body/app-root/div/app-compare/div/div[4]/div[1]/ul/li[1]/span')).getText()).toBe('1')
        expect(element(by.xpath('/html/body/app-root/div/app-compare/div/div[4]/div[1]/ul/li[2]/span')).getText()).toBe('2')
        expect(element(by.xpath('/html/body/app-root/div/app-compare/div/div[4]/div[1]/ul/li[3]/span')).getText()).toBe('3')
        expect(element(by.id('search-map-el')).isPresent()).toBe(true)
    };

    emailShortlist () {
        console.log('Emailling shortlist')
        expect(element(by.cssContainingText('label', 'Send shortlist via email')).isPresent()).toBe(true)
        // Change email below to send the PDF to yourself
        element(by.id('pdfRecipient')).sendKeys('tarren.patel@aat.org.uk')
        element(by.buttonText('Submit')).click()
        expect(EC.alertIsPresent(by.className('alert alert-success')));
    };

};

module.exports = new checkingShortlistInfo
