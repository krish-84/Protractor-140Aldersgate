/*

    __________  ___         ____             _      __           
   / ____/ __ \/   |       / __ \___  ____ _(_)____/ /____  _____
  / __/ / /_/ / /| |______/ /_/ / _ \/ __ `/ / ___/ __/ _ \/ ___/
 / /___/ ____/ ___ /_____/ _, _/  __/ /_/ / (__  ) /_/  __/ /    
/_____/_/   /_/  |_|    /_/ |_|\___/\__, /_/____/\__/\___/_/     
                                   /____/                        
*/

xdescribe('EPA Register Access', function () {

  // to add explicit waits
  var EC = protractor.ExpectedConditions;
  
  // set locally in .env which is git ingnored a master example in H:\Public\ICT\QA\05 Tools\04 Protractor
  require('dotenv').config();

  // Load config for this suite of Tests
  testConfig = require('config');

  // training provider center picker: value=[""]
  // this is a centre approved for epa L3 + L4
  let TB01 = '96207310'; 
  // let TB01 = testConfig.centres.TB01;
  let TB02 = '96207311';

  let centre = userConfig.centres.TB01
  
  // modules   
  var User = require('../../libs/shared/login.page');
  var EpaRegisterAccess = require('./lib/epa-register-access.page');

  // setup 
  beforeEach(function () {
    browser.ignoreSynchronization = true;
  });

  // test cases for access permissions

  it('tp main contact - tb01 gets full access', function() {
    User.login_as(testConfig.group1.main_username, testConfig.group1.main_password);
    browser.sleep(5000); // change for an explicit wait but much lazy
    EpaRegisterAccess.centre_picker(TB01);
    EpaRegisterAccess.link_present();
    EpaRegisterAccess.access_to_service();
    User.logout();

  });  

  it('exams officer - tb01 gets full access', function() {
    User.login_as(EXAMS_OFFICER, UAT_PASS);
    browser.sleep(5000); // change for an explicit wait
    EpaRegisterAccess.centre_picker(TB01);
    EpaRegisterAccess.link_present();
    EpaRegisterAccess.access_to_service();
    User.logout(); 

  });

  it('epa centre contact - tb01 get full access', function() {
    User.login_as(EPA_CONTACT, UAT_PASS);
    browser.sleep(5000); // change for an explicit wait
    EpaRegisterAccess.centre_picker(TB01);
    EpaRegisterAccess.link_present();
    EpaRegisterAccess.access_to_service();
    User.logout();

  });
});                          