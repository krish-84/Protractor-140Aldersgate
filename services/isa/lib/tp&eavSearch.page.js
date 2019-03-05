class eavNewSearch {

    constructor () {}

    navigateToEAVsearch () {
        console.log('Navigate to EAV search');
        browser.get('https://uat-web.aws.aat.org.uk/assessment-venues/search');
        expect(element(by.className('eav-search__header--title')).getText()).toBe('Find a venue to sit your AAT assessment');
    };

    navigateToTPsearch () {
        console.log('Navigate to TP search');
        browser.get('https://uat-web.aws.aat.org.uk/training-providers/search');
        expect(element(by.className('tp-search__header--title')).getText()).toBe('Find a training provider');
    };

    enterLocationEAV () {
        console.log('Location entered');
        var location = ('Hatfield');
        element(by.xpath('/html/body/app-root/div/app-eav-search/div/form/app-location-search-bar/section/input')).sendKeys(location);
        browser.sleep(2000);
    };

    enterLocationTP () {
        console.log('Location entered');
        var location = ('Hatfield');
        element(by.xpath('/html/body/app-root/div/app-tp-search/div/form/app-location-search-bar/section/input')).sendKeys(location);
        browser.sleep(2000);
    };

    selectingAssessment () {
        console.log('Assessment selected');
        element(by.className('icon accordion__icon fa-down-open')).click();
        browser.sleep(1000);
        var LandAfilter = browser.findElement(by.className('accordion__content'))
        LandAfilter.findElements(by.tagName('input')).then(function (radiobutton) {
            radiobutton[0].click();
            browser.sleep(2000);
        });
    };

    selectingQualification () {
        console.log('Qualification selected');
        element(by.xpath("//*[contains(text(), 'AAT Accounting Qualifications')]")).click();
        browser.sleep(1000);
        var qualfilter = browser.findElement(by.className('accordion__content'))
        qualfilter.findElements(by.tagName('input')).then(function (radiobutton) {
            radiobutton[1].click();
        });
    };

    selectingMoD () {
        console.log('MoD selected');
        element(by.id('classroom')).click();
    };

    findProvidersButton () {
        console.log('Clicked Find Providers');
        element(by.buttonText('Find providers')).click();
        browser.sleep(5000);
    };

    findVenuesButton () {
        console.log('Clicked Find Venues');
        element(by.buttonText('Find venues')).click();
        browser.sleep(5000);
    };

    tpResultsPage () {
        console.log('On TP results page');
        expect(element(by.className('tp-results__header--title')).getText()).toBe('Training Providers');
    };

    eavResultsPage () {
        console.log('On EAV results page');
        expect(element(by.className('eav-results__header--title')).getText()).toBe('Assessment Centres');
    };

    locationError () {
        console.log('Location required');
        expect(element(by.className('alert alert-danger')).getText()).toBe('Enter a location');
    };

    assessmentError () {
        console.log('Assessment required');
        expect(element(by.className('alert alert-danger')).getText()).toBe('Please choose an assessment');
    };

    currentLocation () {
        console.log('EAV current location search');
        element(by.className('location__current')).click();
        browser.sleep(6000);
    };

    eavSafetyNet () {
        // Safety click so that the suggestions dropdown disappears. This will then allow other elements to be visible.
        console.log('Safety net applied');
        element(by.className('icon accordion__icon fa-down-open')).click();
        browser.sleep(1000);
    };

    tpSafetyNet () {
        // Safety click so that the suggestions dropdown disappears. This will then allow other elements to be visible.
        console.log('Safety net applied');
        element(by.className('tp-search container')).click();
    };

    EAVselectingResult () {
        console.log('centre select');
        browser.get('https://uat-web.aws.aat.org.uk/training-providers/#/assessment-venues/newpatel05');
    };

};

module.exports = new eavNewSearch