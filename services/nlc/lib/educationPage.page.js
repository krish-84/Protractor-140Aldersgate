class educationPage {
    constructor() {};

    educationDetails() {
      //  expect(browser.getCurrentUrl()).toEqual('https://uat-web.aws.aat.org.uk/register/student/education')
            //expect(element(by.css('class="panel-title fieldset-legend"')).getText().toBe('Your education'))

        var educationLevel = element(by.id('edit-education-question-77'))
        educationLevel.$('[value="Other"]').click()

        var currentQuals = element(by.id('edit-education-question-8-no')).click()
        var similarUnits = element(by.id('edit-education-question-27-no')).click()

        var learningDifficulties = element(by.id('edit-education-question-50'))
        learningDifficulties.$('[value="I do not consider that I have a learning difficulty/disability"]').click()
        var heardAAT = element(by.id('edit-education-question-29'))
        heardAAT.$('[value="From a web search"]').click()
    }

    educationQs_aq() {
        element(by.id('edit-education-question-q-1011-yes')).click()
        element(by.id('edit-education-question-q-1012-no')).click()
    }

    continueBtn() {
        element(by.id('edit-next')).click();
    }

};
//exports an instance of the class to use functions on other files
module.exports = new educationPage