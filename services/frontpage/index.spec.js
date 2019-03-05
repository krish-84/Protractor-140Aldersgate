// excluded as an example test

xdescribe('AAT frontpage', function () {

  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('https://www.aat.org.uk');
  });


  it('should render header', function () {

    var myElement = element(by.className('header'));
    expect(myElement.isPresent()).toBeTruthy();
  });

  it('should render footer', function () {

    var myElement = element(by.className('fake'));
    expect(myElement.isPresent()).toBeFalsy();
  });

});
