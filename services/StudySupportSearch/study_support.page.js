
/*
*
*
* @author David Lake
*
*
*/

var EC = protractor.ExpectedConditions;

class StudySupportPage {

  constructor() {
    
  };

  open() {
    //open the study support page using the url
    browser.get('https://uat-web.aws.aat.org.uk/training/study-support/search');
  };

  find_resources(strand, qual, subject) {
    //click all the panels to access list of relevent resources
    //use xpath to locate an element that containes specified text
    browser.findElement(By.xpath("//*[contains(text(), '" + strand + "')]")).click();
    browser.findElement(By.xpath("//*[contains(text(), '" + qual + "')]")).click();
    browser.findElement(By.xpath("//*[contains(text(), '" + subject + "')]")).click();
    browser.sleep(3000); //sleep allows the page time to load
  };

  bookmark_item(resource) {
    //both the resource links and the bookmark icon are inside an li tag
    //so first locate the bookmark by link name then find the parent container using an xpath and store in a variable
    var li = element(by.linkText(resource)).element(by.xpath(".."));//".." means go back one element from the element your currently on 
    //use the variable that contains the parent container to locate the icon for that resource
    var bookmarkIcon = li.element(By.xpath("./span/i"));//xpath - from the current element find span tag then find the i tag
    bookmarkIcon.click();//clicks icon
    browser.sleep(3000);//give page time to load
  };

};

module.exports = new StudySupportPage