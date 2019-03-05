/*
*
*
* @author David Lake
*
*
 /$$$$$$$                      /$$                                         /$$       /$$                          
| $$__  $$                    | $$                                        | $$      |__/                          
| $$  \ $$  /$$$$$$   /$$$$$$ | $$   /$$ /$$$$$$/$$$$   /$$$$$$   /$$$$$$ | $$   /$$ /$$ /$$$$$$$   /$$$$$$       
| $$$$$$$  /$$__  $$ /$$__  $$| $$  /$$/| $$_  $$_  $$ |____  $$ /$$__  $$| $$  /$$/| $$| $$__  $$ /$$__  $$      
| $$__  $$| $$  \ $$| $$  \ $$| $$$$$$/ | $$ \ $$ \ $$  /$$$$$$$| $$  \__/| $$$$$$/ | $$| $$  \ $$| $$  \ $$      
| $$  \ $$| $$  | $$| $$  | $$| $$_  $$ | $$ | $$ | $$ /$$__  $$| $$      | $$_  $$ | $$| $$  | $$| $$  | $$      
| $$$$$$$/|  $$$$$$/|  $$$$$$/| $$ \  $$| $$ | $$ | $$|  $$$$$$$| $$      | $$ \  $$| $$| $$  | $$|  $$$$$$$      
|_______/  \______/  \______/ |__/  \__/|__/ |__/ |__/ \_______/|__/      |__/  \__/|__/|__/  |__/ \____  $$      
                                                                                                   /$$  \ $$      
                                                                                                  |  $$$$$$/      
                                                                                                   \______/         
*/

//TODO:  - add link to personal bookmarks test
//       - add text on study support test 
//       - convert sleeps to wait untils, 
//       - create set up/tear down via API
//       - run on multiple browsers

xdescribe('Students Using Bookmarking Service', function () {
  browser.manage().window().maximize();//full screen the browser

  require('dotenv').config();
  var AQstudent = process.env.AQ_STUDENT
  var password = process.env.UAT_PASS
  
  //first require all the files that hold the functions needed for the tests....
  var LoginPage = require('../../libs/shared/login.page'); //....and store them into variables to be able to call them during the test
  var StudySupportPage = require('../StudySupportSearch/study_support.page');
  var MyBookmarks = require('./my_bookmarks.page');

  beforeAll(function () {//runs this before running any it blocks
    browser.ignoreSynchronization = true;
    LoginPage.login_as(AQstudent, password);//login using specified credentials
  });

  it('students able to bookmark resources in study support search', function () {
    var strand = 'AAT Accounting Qualifications 2016' // set varibles containing strings to locate a resource on study support serach
    var qual = 'Foundation Certificate in Accounting' // these are the names of the panels to click in study support search
    var subject = 'Bookkeeping Transactions (AQ2016) '
    var resource = "Bookkeeping Transactions - RLS" //and this is the name of the resource needed for the test
    StudySupportPage.open();//navigate to study support page 
    StudySupportPage.find_resources(strand, qual, subject);//click on the panels specified to locate a set of resources
    StudySupportPage.bookmark_item(resource);// click on the bookmark icon next specified resource
    MyBookmarks.open();//navigate to personal bookamarks folder
    expect(MyBookmarks.isBookmarkPresent('Bookkeeping Transactions - RLS')).toEqual(true);//check bookmark is present by checking the return from isBookmarkPresent function is true 
  });

  //it('students able view all bookmarked resources in one place ', function() {
      //this test is currently not possible as link for my bookmarks is no longer present
  //});

  it('students able to create folders for bookmarked resources', function() {
    MyBookmarks.open();//navigate to my bookmarks
    MyBookmarks.create_folder("Test 1");//create a folder with specified name
    expect(MyBookmarks.isFolderPresent('Test 1')).toEqual(true);//check the folder is now present under my folders heading
    MyBookmarks.deleteFolder('Test 1');//tear down by deleting the folder
  });

  it('students able to edit and annotate bookmarked resources ', function() {
    MyBookmarks.addResource();//add resource to personal bookamarks page ready for the test
    MyBookmarks.open();//navigate to my bookmarks
    MyBookmarks.addDescription('Bookkeeping Transactions - RLS', 'This is a test');//edit resource specified and add a description
    expect(MyBookmarks.getResourceDescription('Bookkeeping Transactions - RLS')).toEqual('Description: This is a test');//extract the description, verify it matches the change just made 
    MyBookmarks.removeDescription('Bookkeeping Transactions - RLS');//tear down by removing decription...
  });

  it('students able to mark saved bookmarks as completed/uncompleted', function() {
    MyBookmarks.addResource();//add resource to personal bookamarks page ready for the test
    MyBookmarks.open();//navigate to my bookmarks
    MyBookmarks.markCompleted('Bookkeeping Transactions - RLS');//find resource and mark as completed
    expect(MyBookmarks.isResourceCompleted('Bookkeeping Transactions - RLS')).toEqual(true);//check its visibly clear its marked as completed
    MyBookmarks.markUncompleted('Bookkeeping Transactions - RLS');//find resource and mark as uncompleted
    expect(MyBookmarks.isResourceUncompleted('Bookkeeping Transactions - RLS')).toEqual(true);//check its visibly clear its marked as uncompleted
  });

  it('students able to move resources into created folders', function() {
    MyBookmarks.addResource();//add resource ready for the test
    MyBookmarks.open();//navigate to my bookmarks
    MyBookmarks.create_folder("Test 1");//create folder ready for test
    var resource = element(By.xpath("//*[contains(text(), 'Bookkeeping Transactions - RLS')]"));//set locator for resource
    MyBookmarks.moveResourceToFolder('Bookkeeping Transactions - RLS', "Test 1");//move the resource into the folder just created
    expect(resource.isPresent()).toBeFalsy();//check its no longer in the list
    expect(MyBookmarks.countResourcesInFolder('Test 1')).toEqual('1');//check the resource counter on folder is now "1"
    MyBookmarks.findFolder('Test 1').click();//find that folder and click it to open it
    expect(resource.isPresent()).toBeTruthy();//the resource just moved into that folder should now be visible again
    MyBookmarks.deleteFolderWithBookmarks('Test 1', 'No');// tear down by deleting the folder
  });

  it('students able to remove bookmarked items from Study Support Search', function() {
    MyBookmarks.addResource();//add resource ready for the test
    var resourceLocator = element(By.xpath("//*[contains(text(), 'Bookkeeping Transactions - RLS')]"));//set locator for resource
    var strand = 'AAT Accounting Qualifications 2016' // set varibles containing strings to locate a resource on study support serach
    var qual = 'Foundation Certificate in Accounting' // these are the names of the panels to click in study support search
    var subject = 'Bookkeeping Transactions (AQ2016) '
    var resource = "Bookkeeping Transactions - RLS" //and this is the name of the resource needed for the test
    StudySupportPage.open();//navigate to study support page 
    StudySupportPage.find_resources(strand, qual, subject);//click on the panels specified to locate a set of resources
    StudySupportPage.bookmark_item(resource);// click on the bookmark icon next specified resource
    MyBookmarks.open();//navigate to personal bookmarks page
    expect(resourceLocator.isPresent()).toBeFalsy();//resource should not be found on page
  });

  it('students able to remove bookmarked items from their bookmark list', function() {
    MyBookmarks.addResource();//add resource ready for the test
    var resource = element(By.xpath("//*[contains(text(), 'Bookkeeping Transactions - RLS')]"));//set locator for resource
    MyBookmarks.open();//navigate to personal bookmark page
    expect(resource.isPresent()).toBeTruthy();//check resource is there 
    MyBookmarks.deleteBookmark('Bookkeeping Transactions - RLS');//delete the resource from personal bookmarks page
    expect(resource.isPresent()).toBeFalsy();//check resource is no longer visible on the page
  });

  it('students able to edit folder names', function() {
    MyBookmarks.open();//navigate to personal bookmarks page
    MyBookmarks.create_folder("Test 1");//create folder ready for test
    MyBookmarks.editFolderName('Test 1', 'Business Tax')//chenge the name of the folder just created to "Business Tax"
    expect(MyBookmarks.isFolderPresent('Business Tax')).toEqual(true);//verify the folder with the new name is present 
    MyBookmarks.deleteFolder('Business Tax');//tear down by deleting the folder
  });
  
  it('students able to delete empty folders', function() {
    MyBookmarks.open();//navigate to personal bookmarks page
    MyBookmarks.create_folder("Test 1");//create folder ready for test
    MyBookmarks.deleteFolder('Test 1');//delete the folder as part of test
    var folder = element(by.id("folder-heading")).element(by.xpath("..")).element(By.xpath("//*[contains(text(), 'Test 1')]"));//set locator for the 
    expect(folder.isPresent()).toBeFalsy();// check folder is no longer present 
  });

  it('students able to delete folders containing resources', function() {
    MyBookmarks.addResource();//add resource ready for the test
    var resource = element(By.xpath("//*[contains(text(), 'Bookkeeping Transactions - RLS')]"));//set locator for resource
    MyBookmarks.open();//navigate to personal bookmarks page
    MyBookmarks.create_folder("Test 1");//create folder ready for test
    var folder = element(by.id("folder-heading")).element(by.xpath("..")).element(By.xpath("//*[contains(text(), 'Test 1')]"));//set locator for the folder
    MyBookmarks.moveResourceToFolder('Bookkeeping Transactions - RLS', "Test 1");
    MyBookmarks.deleteFolderWithBookmarks('Test 1', 'Yes');//delete the folder and say yes to deleting resources as well
    expect(folder.isPresent()).toBeFalsy();// check folder is no longer present 
    expect(resource.isPresent()).toBeFalsy();//check is not present on page
  });

  it('students able to delete folders containing resources and keep the resources', function() {
    MyBookmarks.addResource();//add resource ready for the test
    var resource = element(By.xpath("//*[contains(text(), 'Bookkeeping Transactions - RLS')]"));//set locator for resource
    MyBookmarks.open();//navigate to personal bookmarks page
    MyBookmarks.create_folder("Test 1");//create folder ready for test
    var folder = element(by.id("folder-heading")).element(by.xpath("..")).element(By.xpath("//*[contains(text(), 'Test 1')]"));//set locator for the 
    MyBookmarks.moveResourceToFolder('Bookkeeping Transactions - RLS', "Test 1");
    MyBookmarks.deleteFolderWithBookmarks('Test 1', 'No');//delete the folder and say no to deleting resources in it
    expect(folder.isPresent()).toBeFalsy();// check folder is no longer present 
    expect(resource.isPresent()).toBeTruthy();//check resource is back in saved bookmarks
  });

  afterAll(function () { //runs this after all it blocks have finished
    MyBookmarks.deleteBookmark('Bookkeeping Transactions - RLS');//tear it down by deleting the bookmark
    LoginPage.logout();//even if the test fails it will logout ready for next test
  });

}); 
