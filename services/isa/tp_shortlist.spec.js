describe('tp shortlist', function () {
    browser.manage().window().maximize();
    browser.ignoreSynchronization = true;

    var goToTPSearchPage = require ('./lib/tp&eavSearch.page')
    var location = require('./lib/tp&eavSearch.page')
    var precaution = require('./lib/tp&eavSearch.page')
    var qualification = require('./lib/tp&eavSearch.page')
    var findProviders = require('./lib/tp&eavSearch.page')
    var addingResults2Shortlist = require('./lib/tpAdd2Shortlist.page')
    var goingToShortlistPage = require('./lib/shortlistPage.page')
    var checkingShortlistPage = require('./lib/shortlistChecks.page')

    it('Verify that user is able to shortlist results and send themselves and PDF of the shortlist', function () {
        //Test to ensure the shortlist functionality works and shows correct information.
        goToTPSearchPage.navigateToTPsearch()
        location.enterLocationTP();
        precaution.tpSafetyNet();
        qualification.selectingQualification();
        findProviders.findProvidersButton();
        addingResults2Shortlist.add2shortlist();
        goingToShortlistPage.clickShortlistLink();
        checkingShortlistPage.verifyShortlistInfo();
        checkingShortlistPage.emailShortlist();

    });
});