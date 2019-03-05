class qualifications_page {

    constructor() {};

    openQualificationsPage() {
        var qualification_editButton = element(by.xpath('html/body/app-root/div/centre-editor/div/home/div/div[2]/fab-panel[2]/div[2]/button'))
        qualification_editButton.click();
    }

    introTextPresent() {
        //if the element containing the specified text is displayed on the page then return true back to the test
        if (browser.findElement(By.xpath("//*[contains(text(), 'Provide information for all qualifications you are currently offering so that you appear in search result listings.')]")).isDisplayed()) {
            return true
        }
    }

    selectQualification() {
        var selectQualification = element(by.xpath('html/body/app-root/div/centre-editor/div/qualifications-form/div/form/div/div[1]/fab-accordion/section/header')).click()
    }
};

//exports an instance of the class to use functions on other files
module.exports = new qualifications_page