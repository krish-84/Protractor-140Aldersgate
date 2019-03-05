class tpShortlistPage {
    constructor() {}

//Clicking the shortlist button to navigate to the Shortlist page.
    clickShortlistLink() {
        console.log('clickShortlistLink');
        element(by.className('btn fa fa-plus')).click()
        browser.sleep(2000);
        };
    };
    
//exports an instance of the class to use functions on other files
module.exports = new tpShortlistPage