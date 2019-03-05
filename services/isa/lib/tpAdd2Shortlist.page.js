class addshortlist {
    constructor() {}

//Adding 3 results to shortlist. This can be altered to adding as many as you like by removing a shortlistbutton.
    add2shortlist() {
        console.log('add2shortlist');
        browser.sleep(5000);
        browser.findElements(by.className('fa-heart-empty')).then(function (shortlistbutton) {
            shortlistbutton[0].click();
            browser.sleep(500)
            shortlistbutton[1].click();
            browser.sleep(500)
            shortlistbutton[2].click();
            browser.sleep(500)
        });
    };
};
//exports an instance of the class to use functions on other files
module.exports = new addshortlist