xdescribe('Viewing results on a Map', function () {
    browser.manage().window().maximize();

    var tpMakeASearch = require('./lib/tpSearch.page')
    var mapView = require('./lib/viewingTPsearchOnMap.page')
    var listView = require('./lib/viewingTPsearchOnMap.page')

    it('View results on a map then revert back to list view', function () {
        tpMakeASearch.tpSearch()
        mapView.clickingMapView()
        listView.clickingListView()

    });
});