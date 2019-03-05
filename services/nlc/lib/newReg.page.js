class newReg {
    constructor() {};

    startNewReg() {
        //click on reg page and verify by checking URL
        var regButton = element(by.css('a[href="/get-myaat"]')).click();
       // expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/get-myaat');

        //click on register now link and verify by checking URL
        // var regNowButton = element(by.css('a[href="https://stage-web.aws.aat.org.uk/register/student"]')).click();
        element(by.xpath(".//*[@id='container']/div/div[3]/div/div/section/div/div[2]/div[2]/div/div/div/div[1]/div/div[2]/ul/li[1]/a")).click()
     //   expect(browser.getCurrentUrl()).toEqual('https://stage-web.aws.aat.org.uk/register/student');
    };
};
//exports an instance of the class to use functions on other files
module.exports = new newReg