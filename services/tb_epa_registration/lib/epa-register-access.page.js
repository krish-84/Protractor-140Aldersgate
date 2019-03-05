var EC = protractor.ExpectedConditions;

class EpaRegisterAccess {

  constructor() {

  };

  // function to use center picker by setting value in spec/test
  centre_picker(tp){
    element(by.id('edit-centre')).$('[value="'+ tp +'"]').click();
    // add EC 
  }
  // once centre selected explicit wait 
  // for ocs to load and for service link to be present
  link_present(){
    var epalink = element(by.css('[href="/centre-services/epa-register"]'));
    browser.wait(EC.elementToBeClickable(epalink), 15000); // ocs takes an age to load
  }

  // now clicks link to service epa registration service and checks it loads and user has full access
  access_to_service(){
    var epalink = element(by.css('[href="/centre-services/epa-register"]')); 
    epalink.click();
    browser.wait(EC.urlContains('/centre-services/epa-register/#'), 5000); // needs lots of explicit waits for service to load
    expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/centre-services/epa-register/#/');
    var start = element(by.buttonText('Start'));
    start.click();
    browser.wait(EC.urlContains('/students'), 15000); // takes ages to load  - api calls... 
    expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/centre-services/epa-register/#/students');   

  }
};

module.exports = new EpaRegisterAccess