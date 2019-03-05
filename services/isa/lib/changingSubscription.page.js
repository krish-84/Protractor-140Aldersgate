class editSub {

    constructor () {}

    viewSubscriptionPage () {
        console.log('called - viewSubscriptionPage');
        // Use this function to go to the subscription page. Note, this will not work for Special orgs (ISA Pricing Agreement).
        element(by.cssContainingText('a', 'View or upgrade subscription.')).click();
        expect(element(by.tagName('h2')).getText()).toBe('Your subscription');
        browser.sleep(7000)
    };

    changeSub () {
        // Use this function to upgrade/downgrade subscription. Note, this will NOT work if buttons are disabled.
        browser.findElements(by.className('centre subscription-button')).then(function (subscriptionbutton) {
            // Then number parsed into the [x] will determine whether which button you select. 
            // Only options are 0 or 1. 0 being the first button available and 1 being the other. 
            // Think of it as left or right where left is 0 and right is 1.
            // For EAVs x should always be 0
            subscriptionbutton[0].click();
        browser.sleep(1000)
        element(by.className('btn btn-success btn-xs')).click()
        browser.sleep(1000)
        element(By.className('subs-dialog-message')).isPresent().then(function (isVisible) { //sometimes this page fails to load properly, so if this element is present then ...
            if (isVisible) {
                console.log("isVis content == " - isVisible);
                element(by.xpath('//*[@id="cdk-overlay-0"]/md-dialog-container/cdk-focus-trap/div[2]/confirm-dialog/div/form/div[1]/input')).sendKeys('patel1994')
                browser.sleep(1000)
                element(by.buttonText('Submit your application')).click()
                browser.sleep(1000)
            } else { // else if that element is not present then...
              //...do nothing
                console.log("did nothing");
            };
          });

        });
        
    };

};

module.exports = new editSub