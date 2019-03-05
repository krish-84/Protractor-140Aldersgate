class TPMapView {

    constructor() {};

    clickingMapView() {
        console.log('clickingMapView');
        browser.findElement(by.xpath('html/body/app-root/div/app-tp-search-results/div/section/div[2]/p/a/strong')).click()
        expect(element(by.xpath('//*[@id="list-anchor"]/h1')).getText()).toBe('Map view')
    };

    clickingListView() {
        console.log('clickingListView');
        browser.findElement(by.linkText("List view")).click()
        expect(element(by.className('tp-search__header--title')).getText()).toBe('Training Providers')
    };
};

//exports an instance of the class to use functions on other files
module.exports = new TPMapView