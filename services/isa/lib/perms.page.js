class checkAccessPerms {

    constructor () {}

    TPadminConsole () {
        console.log('Access the TP admin console');
        element(by.cssContainingText('a', 'Manage my training provider content')).click();
        browser.sleep(5000)
    };

    EAVadminConsole () {
        console.log('Access the EAV admin console');
        element(by.cssContainingText('a', 'Manage my assessment venue content')).click();
        browser.sleep(5000)
    };

    shouldGetAccesstoTPadmin () {
        console.log('Granted access to TP admin');
        expect(element(by.tagName("h1")).getText()).toEqual('Promote your Training Provider')
    };

    shouldGetAccesstoEAVadmin () {
        console.log('Granted access to EAV admin');
        expect(element(by.tagName("h1")).getText()).toEqual('Promote your External Assessment Venue')
    };

    noAccessToAdmin () {
        console.log('No access to admin console');
        expect(element(by.cssContainingText('a', 'Manage my training provider content')).isPresent()).toBe(false);
        expect(element(by.cssContainingText('a', 'Manage my assessment venue content')).isPresent()).toBe(false);
    };
};

module.exports = new checkAccessPerms