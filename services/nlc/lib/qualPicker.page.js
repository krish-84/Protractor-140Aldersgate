class qualificationPicker {

    constructor() {};

    qualPicker_AQ2016() {
      //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/strand')
        expect(element(by.css('h1[class="page-header"]')).getText()).toBe('Register as a student')
            //select AQ2016 from qual picker    
        element(by.xpath(".//*[@id='desktop']/div[1]/div/ul/li[1]/label/div")).click();
        element(by.css('div[class="form-type-checkbox form-item-strand-0-name-programmes-AATAQ2016 form-item checkbox"]')).click();
    }

    qualPicker_FDAB() {
       // expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/strand')
        expect(element(by.css('h1[class="page-header"]')).getText()).toBe('Register as a student')
            //select FDAB from qual picker
        element(by.xpath(".//*[@id='desktop']/div[1]/div/ul/li[4]/label/div")).click()
        element(by.xpath(".//*[@id='lc-aatfdab2016']/div/div")).click()
    }

    qualPicker_allStrand1() {
        //expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/strand')
        expect(element(by.css('h1[class="page-header"]')).getText()).toBe('Register as a student')
        element(by.xpath(".//*[@id='desktop']/div[1]/div/ul/li[2]/label/div")).click() //select AAT Bookkeeping strand
        element(by.xpath(".//*[@id='lc-l1abkk']/div")).click() //select L1 award in BK
        element(by.xpath(".//*[@id='lc-aatfcb2016']/div")).click() //select foundation cerf in BK
        element(by.xpath(".//*[@id='lc-aatacb2016']/div")).click() //select adv cer in BK
        element(by.xpath(".//*[@id='lc-l1aca']/div")).click() //select L1 award in comp acc 
        element(by.xpath(".//*[@id='lc-aatfaas2016']/div")).click() //select foundation award in acc software
    }

    qualPicker_allStrand2() {
      //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/strand')
        expect(element(by.css('h1[class="page-header"]')).getText()).toBe('Register as a student')
        element(by.xpath(".//*[@id='desktop']/div[1]/div/ul/li[3]/label/div")).click() //select AAT acc & bus skills
        element(by.xpath(".//*[@id='lc-aatacs']/div")).click() //select aat access
        element(by.xpath(".//*[@id='lc-l1ciac']/div")).click() //select L1 cerf in acc
        element(by.xpath(".//*[@id='lc-l2asyb']/div")).click() //select L2 award in acc skills & run your bus
        element(by.xpath(".//*[@id='lc-aatdbs']/div")).click() //select L4 dip in bus skills
    }
    continueBtn() {
        var continueButton = element(by.id('edit-buttons-next')).click()
    }
};

//exports an instance of the class to use functions on other files
module.exports = new qualificationPicker