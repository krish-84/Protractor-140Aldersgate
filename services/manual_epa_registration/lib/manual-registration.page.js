var EC = protractor.ExpectedConditions;

class EpaRegistration {

  constructor() {

  };

  input_special() {

    browser.get('https://www.aat.org.uk/centre-services/epa/registration'); // prob should run against test instance or s3
    var tpCode = element(by.id('tpCode'));
  
    browser.wait(EC.elementToBeClickable(tpCode), 5000);
    tpCode.sendKeys('<>');
    var alert = element(by.xpath('html/body/app-root/app-form/div/div/form/div[1]/div/div'));
    expect(alert.isPresent()).toBeTruthy();

    var contactName = element(by.id('contactName')).sendKeys('<>');
    var alert = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[1]/div'));
    expect(alert.isPresent()).toBeTruthy();

    var contactJobTitle = element(by.id('contactJobTitle')).sendKeys('<>');
    var alert = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[2]/div'));
    expect(alert.isPresent()).toBeTruthy();

    var validEmail = element(by.id('email')).sendKeys('@');
    var alert = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[3]/div'));
    expect(alert.isPresent()).toBeTruthy();

    var validPhone = element(by.id('phone')).sendKeys('@');
    var alert = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[4]/div'));
    expect(alert.isPresent()).toBeTruthy();

    var roatpYes = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[5]/div[1]/label/input'));
    roatpYes.click()
    var roatpNumber = element(by.id('roatpNumber')).sendKeys('<>');
    var alert = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[6]/div'));
    expect(alert.isPresent()).toBeTruthy();

    var roatpNo = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[5]/div[2]/label/input'));
    browser.wait(EC.elementToBeClickable(roatpNo), 5000);
    roatpNo.click();
    var noroatpNumber = element(by.id('noRoatpReason')).sendKeys('<>');
    var alert = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[6]/div'));
    expect(alert.isPresent()).toBeTruthy();

    var aaoYes = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[10]/div[1]/label/input'));
    aaoYes.click();
    var aaoYesInput = element(by.id('offerEpaAaoName')).sendKeys('<>');
    var alert = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[11]/div'));
    expect(alert.isPresent()).toBeTruthy();

    var aaoDeclinedYes = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[12]/div[1]/label/input'));
    aaoDeclinedYes.click();
    var aaoDeclinedYesInput = element(by.id('aaoDeclinedName')).sendKeys('<>')
    var alert = element(by.xpath('html/body/app-root/app-form/div/div/form/div[2]/div/div[13]/div'));
    expect(alert.isPresent()).toBeTruthy();
 }
};

module.exports = new EpaRegistration
