describe('EAV search page testing', function () {
    browser.manage().window().maximize();
    browser.ignoreSynchronization = true;

    var goToEAVsearchPage = require('./lib/tp&eavSearch.page')
    var location = require('./lib/tp&eavSearch.page')
    var assessment = require('./lib/tp&eavSearch.page')
    var findVenues = require('./lib/tp&eavSearch.page')
    var onResultsPage = require('./lib/tp&eavSearch.page')
    var noLocation = require('./lib/tp&eavSearch.page')
    var noAssessment = require('./lib/tp&eavSearch.page')
    var currentLocationButton = require('./lib/tp&eavSearch.page')
    var precaution = require('./lib/tp&eavSearch.page')


    it('Verify that user is able to make a search for EAVs', function (){
        goToEAVsearchPage.navigateToEAVsearch()
        location.enterLocationEAV();
        assessment.selectingAssessment();
        findVenues.findVenuesButton();
        onResultsPage.eavResultsPage();
    });

    it('Verify user is able to search for EAVs by Current Location', function (){
        goToEAVsearchPage.navigateToEAVsearch()
        currentLocationButton.currentLocation();
        assessment.selectingAssessment();
        findVenues.findVenuesButton();
        onResultsPage.eavResultsPage();
    });


    it('Verify that the Level and Assessment type filter is mandatory', function (){
        goToEAVsearchPage.navigateToEAVsearch()
        location.enterLocationEAV();
        precaution.eavSafetyNet();
        findVenues.findVenuesButton();
        noAssessment.assessmentError();
    });

    it('Verify that the location filter is mandatory', function () {
        goToEAVsearchPage.navigateToEAVsearch()
        assessment.selectingAssessment();
        findVenues.findVenuesButton();
        noLocation.locationError();
    });

});