describe('TP search page testing', function () {
    browser.manage().window().maximize();

    var goToTPsearchPage = require('./lib/tp&eavSearch.page')
    var location = require('./lib/tp&eavSearch.page')
    var qualification = require('./lib/tp&eavSearch.page')
    var mod = require('./lib/tp&eavSearch.page')
    var findProviders = require('./lib/tp&eavSearch.page')
    var onResultsPage = require('./lib/tp&eavSearch.page')
    var noLocation = require('./lib/tp&eavSearch.page')
    var precaution = require('./lib/tp&eavSearch.page')
    var currentLocationButton = require('./lib/tp&eavSearch.page')

    it('Verify that user is able to make a search for TPs', function (){
        goToTPsearchPage.navigateToTPsearch()
        location.enterLocationTP();
        precaution.tpSafetyNet();
        qualification.selectingQualification();
        mod.selectingMoD();
        findProviders.findProvidersButton();
        onResultsPage.tpResultsPage();
    });

    it('Verify user is able to search for TPs by Current Location', function (){
        goToTPsearchPage.navigateToTPsearch();
        currentLocationButton.currentLocation();
        qualification.selectingQualification();
        mod.selectingMoD();
        findProviders.findProvidersButton();
        onResultsPage.tpResultsPage();
    });

    it('Verify that the Qualificaiton & MoS filters are not mandatory', function (){
        goToTPsearchPage.navigateToTPsearch()
        location.enterLocationTP();
        precaution.tpSafetyNet();
        findProviders.findProvidersButton();
        onResultsPage.tpResultsPage();
    });

    it('Verify that the location filter is mandatory', function (){
        goToTPsearchPage.navigateToTPsearch()
        qualification.selectingQualification();
        mod.selectingMoD();
        findProviders.findProvidersButton();
        noLocation.locationError();
    });

});