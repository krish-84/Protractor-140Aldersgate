class registeringStudents {

    constructor () {}

    epaRegLink() {
        console.log('Accessed EPA serivce');
        browser.sleep(1000)
        element(by.cssContainingText('a', 'EPA registration')).click()
        browser.sleep(3500)
        element(by.className('page-navigation--button')).click()
        browser.sleep(10000)
    };

    centrePicker() {
        console.log('Correct centre is selected')
        element(by.buttonText('Change centre')).click();
        element(by.id('centre-picker')).click()
        var dropdown = element(by.id('centre-picker'));
        dropdown.element(by.cssContainingText('option', 'Runshaw College')).click();
        browser.sleep(2000)
    };

    selectingEPAlevel3() {
        console.log('L3 EPA selected')
        var dropdown = element(by.id('qualificationId'));
        dropdown.element(by.cssContainingText('option', 'AAT Assistant Accountant End Point Assessment')).click();
        browser.sleep(5000)
    };

    selectingEPAlevel4() {
        console.log('L4 EPA selected')
        var dropdown = element(by.id('qualificationId'));
        dropdown.element(by.cssContainingText('option', 'AAT End Point Assessment Professional Accounting Technician')).click();
        browser.sleep(5000)
    };

    selectingStudents() {
        console.log('Selected the students')
            browser.findElements(by.className('ag-cell-wrapper')).then(function (student) {
            student[0].click();
            element(by.xpath('//*[@id="borderLayout_eGridPanel"]/div[1]/div/div[4]/div[3]/div/div/div[1]/div[3]')).getText().then(function(memberID) {
                console.log('Student memberIDs:');    
                console.log(memberID);
                });
            element(by.xpath('//*[@id="borderLayout_eGridPanel"]/div[1]/div/div[4]/div[3]/div/div/div[1]/div[4]')).sendKeys(1234567890);
            element(by.xpath('//*[@id="borderLayout_eGridPanel"]/div[1]/div/div[4]/div[3]/div/div/div[1]/div[5]')).click();
            element(by.cssContainingText('button','02')).click();
            element(by.xpath('//*[@id="borderLayout_eGridPanel"]/div[1]/div/div[4]/div[3]/div/div/div[1]/div[6]')).click();
            element(by.cssContainingText('button', 'December')).click();
            browser.sleep(3000)
            });
    };

    clickNext() {
        console.log('Clicked Next')
        element(by.cssContainingText('button', 'Next')).click();
        browser.sleep(10000);
    };

    employerDetails() {
        console.log('Employer Details added')
        browser.findElements(by.className('fab-edit-header--action')).then(function (employerDetails) {
            employerDetails[0].click()
        });
        element(by.id('employerName')).sendKeys("city ");
        browser.sleep(4000)
        element(by.cssContainingText('button', 'City College Norwich Ipswich Road NR2 4LJ')).click();
        element(by.id('mentorFirstName')).sendKeys("Tarren");
        element(by.id('mentorLastName')).sendKeys("Patel");
        element(by.id('mentorEmail')).sendKeys("testing@aat.org.uk");
        element(by.id('mentorPhone')).sendKeys("123456789");
        element(by.cssContainingText('button', 'Save employer details')).click();
        browser.sleep(7000)
    };

    paymentPage() {
        console.log('Payment confirmed')
        element(by.cssContainingText('label', 'I agree to the following terms and conditions')).click();
        element(by.id('PONumber')).sendKeys("patel1994");
    };

    clickSubmit() {
        console.log('Clicked Submit')
        element(by.cssContainingText('button', 'Submit')).click();
        browser.sleep(10000)
    };

};

module.exports = new registeringStudents