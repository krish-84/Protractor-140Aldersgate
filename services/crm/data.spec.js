fdescribe('CRM', function () {
    browser.manage().window().maximize();

    it('Create contact', function () {
        browser.get('http://uatcrm.aat.org.uk/AAT/main.aspx#')
        browser.sleep(5000);
        browser.findElements(by.className('navTabButtonArrowDown')).then(function (ribbon) {
            ribbon[1].click();
        });
        element(by.id('nav_accts')).click();
        browser.sleep(2000);
        element(by.id('Tabnav_accts-main')).click();
        browser.sleep(3000);
        element(by.id('account|NoRelationship|HomePageGrid|Mscrm.HomepageGrid.account.NewRecord')).click();
        browser.sleep(8000);
        browser.findElements(by.className('navTabButtonLabel')).then(function (now) {
            now[2].click();
        });


        element(by.id('name_d')).click();
        browser.sleep(1000);
        element(by.id('name_i')).sendKeys('Tarren');

        // driver.findElement(by.id('name')).click();
        // browser.findElements(by.cssContainingText('tr', '--')).then(function (field) {
        //     field[3].click();
        //     field[3].sendKeys('tarren');
        // });
        
        browser.sleep(10000);
            
    });

});