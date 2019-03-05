class reCaptcha {

    constructor () {}

    cannotSubmitWithoutRecaptcha () {
        console.log('Without reCaptcha the URL should not change');
        expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/myaat');
    };

};

module.exports = new reCaptcha