class payment {
    constructor() {};

    // paymentPage() {
    //     expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/fees')
    // };

    isPricePresent(feeType, feePrice) {
        var priceTable = browser.findElement(by.xpath('//*[contains(text(), "' + feeType + '")]')).findElement(by.xpath(".."))
        if (priceTable.findElement(by.xpath('//*[contains(text(), "' + feePrice + '")]')).isDisplayed()) {
            return true
        }
    }

    contiuneBtn() {
        var continueButton = element(by.id('edit-next')).click();
    }

    datacashPage() {
        var cardHoldersName = element(by.id('card_name')).sendKeys('Test')
        var cardType = element(by.css('[value="Visa"]')).click()
        var cardNumber = element(by.id('card_number')).sendKeys('4111111111111111')
        var expMonth = element(by.id('exp_month'))
        expMonth.$('[value="01"]').click()
        var expYear = element(by.id('exp_year'))
        expYear.$('[value="2020"]').click()
        var cv2No = element(by.css('[name="cv2_number"]')).sendKeys('123')
        var continueButton = element(by.id('continue')).click();

        //auth page
        expect(browser.getCurrentUrl()).toEqual('https://testserver.datacash.com/acs')
        var auth = element(by.css('[value="Authenticated"]')).click()
    }
};
//exports an instance of the class to use functions on other files
module.exports = new payment