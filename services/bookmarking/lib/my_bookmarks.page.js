/*
*
*
* @author David Lake
*
*
*/
var EC = protractor.ExpectedConditions;

class MyBookmarks {
   
  constructor() {
    
  };

  open() { 
    browser.getCurrentUrl().then(function (URL) { //check if its already on the page
      if (URL == "https://uat-web.aws.aat.org.uk/myaat/bookmark") { 
        //if it is do nothing and just carry on with the test
      } else { // if its not on the right page then...
        browser.get('https://uat-web.aws.aat.org.uk/myaat/bookmark');//...navigate to personal bookmark page
        browser.sleep(4000);//this page needs time to load
      };
    });
    // DO NOT REMOVE THIS SECTION USED AS A FAIL SAFE
    element(By.id("cat-{{category.id}}")).isPresent().then(function (isVisible) { //sometimes this page fails to load properly, so if this element is present then ...
      if (isVisible) {
        browser.navigate().refresh()// ...refresh the page
        browser.sleep(4000)// and let the page load again
      } else { // else if that element is not present then...
        //...do nothing
      };
    });
  };


  ///////////// Set Up and Tear Down functions /////////////////////////

  addResource() { //should be an API request uses web for now
    //use this to set up tests by adding a resource to my bookmarks
    this.open()
    element(By.xpath("//*[contains(text(), 'Bookkeeping Transactions - RLS')]")).isPresent().then(function (isVisible) {
      if (isVisible) {
        //do nothing 
      } else {
        var StudySupportPage = require('../StudySupportSearch/study_support.page');
        var strand = 'AAT Accounting Qualifications 2016' // set varibles containing strings to locate a resource on study support serach
        var qual = 'Foundation Certificate in Accounting' // these are the names of the panels to click in study support search
        var subject = 'Bookkeeping Transactions (AQ2016) '
        var resource = "Bookkeeping Transactions - RLS" //and this is the name of the resource needed for the test
        StudySupportPage.open();
        StudySupportPage.find_resources(strand, qual, subject);
        StudySupportPage.bookmark_item(resource);
      };
    });
  };

  deleteAll() {

  }


  ///////////// Locate, Edit and Delete Bookmarked Items ////////////////////////////

  findResource(resource) {
    return browser.findElement(By.xpath("//*[contains(text(), '" + resource + "')]")).findElement(by.xpath('..'));
    //this locates a bookmarked item by finding element containing the name of the resource
    //then uses xpath to go up one element on webpage which is the container of the text, which is the bookmarked item
  };

  isBookmarkPresent(resource) {
    //If the element containing the specified text is displayed on the page then return true back to the test
    if (browser.findElement(By.xpath("//*[contains(text(), '" + resource + "')]")).isDisplayed()) {
      return true
    };
  };

  editResource(resource) { //opens the edit panel on a resource
    var resource = this.findResource(resource)//use the find resource function to locate the resource to be edited
    var editButton = resource.findElement(By.xpath("./span"));//locate the span tag whcih is the edit button and click
    //browser.wait(EC.elementToBeClickable(editButton), 5000);
    editButton.click();
    browser.sleep(1000);//allow panel time to open
  };

  addDescription(resource, text) { //annotate resource by adding text to descripion field
    this.editResource(resource); //use edit resource function to open edit panel on specified resource
    var descriptionField = browser.findElement(by.id("formly_2_input_description_1")); //locate description field
    descriptionField.sendKeys(text); //enter specified text into decription field
    this.saveEdit(); //use saveEdit function to save changes to resource
  };

  getResourceDescription(resource) { //extracts the description from specified resource
    var resource = this.findResource(resource)// use find resource function to locate specified resource
    var description = resource.findElement(by.xpath("./div[3]")).getText();//then find the decription field, extract text
    return description // return the text back to the test
  };

  removeDescription(resource) { //removes decription from specified resource as a tear down method
    this.editResource(resource); //open edit panel on resource
    var descriptionField = browser.findElement(by.id("formly_2_input_description_1")); //find description text field
    descriptionField.clear();// remove text from text area
    this.saveEdit(); // uses saveEdit fucntion to save the changes
  };

  saveEdit() {  //there are two save buttons, so find all elements called save
    browser.findElements(By.xpath("//*[contains(text(), 'Save ')]")).then(function(savebutton){
      savebutton[1].click(); //then click the second save button
    });
    browser.sleep(1000);//allow button click to process
  };

  deleteBookmark(resource) {
    this.editResource(resource);// open edit panel on resource
    browser.findElement(By.xpath("//*[contains(text(), 'Delete bookmark ')]")).click();//locate the delete button and click
    browser.sleep(1000);// allow button click to process
  };


  //////////// Marking Resources as Completed/Uncompleted /////////////

  markCompleted(resource) {
    var resource = this.findResource(resource)// find the resources using the findResource fucntion
    resource.findElement(By.xpath("//*[contains(text(), 'Mark as completed')]")).click();//locate mark as complete text and click
    browser.sleep(1000);//allow time to process
  };

  isResourceCompleted(resource) { //checks resource has been marked as completed
    var resource = this.findResource(resource); // find the resources using the findResource fucntion
    if (resource.findElement(By.xpath("//*[contains(text(), 'Mark as uncompleted')]")).isDisplayed()) { //if mark as uncompleted text is located
      return true // then it is marked as complete so return tru back to test
    };
  };
  
  markUncompleted(resource) { // find the resources using the findResource fucntion
    var resource = this.findResource(resource); // find the resources using the findResource fucntion
    resource.findElement(By.xpath("//*[contains(text(), 'Mark as uncompleted')]")).click();//locate mark as complete text and click
    browser.sleep(1000); //allow time to proccess
  };

  isResourceUncompleted(resource) { //checks resource has been marked as uncompleted
    var resource = this.findResource(resource); // find the resources using the findResource fucntion
    if (resource.findElement(By.xpath("//*[contains(text(), 'Mark as completed')]")).isDisplayed()) { //if mark as completed text is located
      return true // then resource is not completed so return true back to test
    };
  };
  

  /////////////////////  Folder Functions  //////////////////////

  create_folder(name) {
    var createfolder = browser.findElement(By.xpath("//input[@placeholder='Create a folder']")); //locate create folder text field
    createfolder.sendKeys(name); // enter the name of the folder
    this.saveFolder(); // use saveFolder function to save changes
  };

  saveFolder() { //there are two save buttons, so find all elements called save
    browser.findElements(By.xpath("//*[contains(text(), 'Save ')]")).then(function(savebutton){
      savebutton[0].click();//then click the first save button
    });
    browser.sleep(1000);//allow button click to process 
  };

  findFolder(name) { //locates folder in the My Folders list
     var myfolders = browser.findElement(by.id("folder-heading")).findElement(by.xpath(".."))// locate the My Folders heading, use xpath to go up one element to get the container of all folders
     return myfolders.findElement(By.xpath("//*[contains(text(), '" + name + "')]")) //locate the folder with specified name and return it
  };
   
  isFolderPresent(name) {//If the element containing the specified text is displayed in the my folders list then return true back to test
    var myfolders = browser.findElement(by.id("folder-heading")).findElement(by.xpath(".."));//locate my folders list
    if (myfolders.findElement(By.xpath("//*[contains(text(), '" + name + "')]")).isDisplayed()) { // check specifed folder is displayed in the list
      return true // if so then return true back to test
    };
  };

  //TODO: generalise function to be able to pick any folder
  moveResourceToFolder(resource, folder) { //finds specified resource and moves it into specified folder
    this.editResource(resource); // open up edit panel on resource
    var select = browser.findElement(By.id("formly_2_select_category_id_2")); // locate the drop down menu for choosing the folder
    select.click(); //open the menu
    select.findElements(By.tagName("option")).then(function(option) { //find all options
      option[1].click(); // then click the second one
    });
    this.saveEdit();// use saveEdit function to save changes
  };

  countResourcesInFolder(folderName) { //folders have a resource counter, this function extracts that data
    var folder = this.findFolder(folderName);//locate the specified folder
    var counter = folder.findElement(By.tagName("span"));//locate the span tag which is the resource counter for that folder
    return counter.getText();// extract the number and return it
  };

  editFolder(foldername) {// opens edit panel for a folder
    var folder = this.findFolder(foldername);//find the folder
    var folderContainer = folder.findElement(by.xpath("../../..")); //go up 3 elements on webpage to get container of folder
    var editButton = folderContainer.findElement(By.xpath("//*[contains(text(), 'Edit')]"));// set locator for edit button
    //browser.wait(EC.elementToBeClickable(editButton), 5000);
    editButton.click();//find the edit button inside that container and click it
    browser.sleep(1000);//allow page to load
  };

  editFolderName(foldername, text) { // changes the name of a folder
    this.editFolder(foldername);// use editFolder function to open the edit panel on the folder
    var textField = browser.findElement(By.xpath("//input[@placeholder='Create a folder']"));// find the text field of the name
    textField.clear();// remove current text
    textField.sendKeys(text); // enter new text
    this.saveFolder();// use saveFolder function to save changes
  };

  deleteFolder(foldername) { 
    this.editFolder(foldername);//open edit panel on folder
    browser.findElement(By.xpath("//*[contains(text(), 'Delete ')]")).findElement(by.xpath("..")).click(); //locate delete button and click
    browser.sleep(1000);//allow button click to process
  };

  deleteFolderWithBookmarks(foldername, option) { //if a folder has resources inside, when deleted confirmation panel appears
    // if option is 'Yes' resources inside are deleted with it
    //Else if option is 'No' resources are not deleted and added back into saved bookmarks list
    this.deleteFolder(foldername);// use function to delete the folder to get confrimation panel
    var classname = "" 
    //use a conditional statement to change the classname of the element to be clicked
    //based on the option given
    if (option == "Yes") {
      classname =  "removing"
    } else {
      classname =  "not-removing"
    };
    var confirmDel = element(By.className("remov-confirmation"))//locator for confirmation panel
    confirmDel.element(By.className(classname)).click(); //use the classname to locate the right option and click it
    browser.sleep(1000);//allow time to process
  };

};

module.exports = new MyBookmarks //exports an object of the class to be able to require it in other files
//which enables you to call the functions within this class