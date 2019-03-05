class startPage {

    constructor() { };

    startRegDetails() {
        var faker = require('faker');


        // function to generate random email address 
        function randomString(length, chars) {
            var emailResult = ''
            for (var i = length; i > 0; --i) emailResult += chars[Math.floor(Math.random() * chars.length)];
            return emailResult + '@aat-test.org.uk';
        }

        var randomEmail = randomString(10, 'abcdefghijklmnopqrstuvwxyz');
        var email = element(by.id('edit-myaat-email')).sendKeys(randomEmail);
        var confirmEmail = element(by.id('edit-myaat-email-confirm')).sendKeys(randomEmail);

        // var randomEmail = faker.internet.email();
        // element(by.id('edit-myaat-email')).sendKeys(randomEmail);
        // element(by.id('edit-myaat-email-confirm')).sendKeys(randomEmail);

        //function to generate random password 
        // var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        // var string_length = 8;
        // var randomstring = '';
        // var charCount = 0;
        // var numCount = 0;
        // for (var i = 0; i < string_length; i++) {
        //     // If random bit is 0, there are less than 3 digits already saved, and there are not already 5 characters saved, generate a numeric value
        //     if ((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
        //         var rnum = Math.floor(Math.random() * 10);
        //         randomstring += rnum;
        //         numCount += 1;
        //     } else {
        //         // If any of the above criteria fail, go ahead and generate an alpha character from the chars string
        //         var rnum = Math.floor(Math.random() * chars.length);
        //         randomstring += chars.substring(rnum, rnum + 1);
        //         charCount += 1;
        //     }
        // }
        var pword = element(by.id('edit-myaat-user-password')).sendKeys('Password123');
        var confPword = element(by.id('edit-myaat-user-password-confirm')).sendKeys('Password123');
        var optOutTick = element(by.id('edit-myaat-opt-out')).click();
        browser.sleep(2000)
        var continueButton = element(by.id('edit-next')).click();
    };
};

//exports an instance of the class to use functions on other files
module.exports = new startPage