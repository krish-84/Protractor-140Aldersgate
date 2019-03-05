Web UI Testing
==============

This repo includes the UI & e2e tests for the website.



### The tooling uses the following : 

 - [Jasmine](https://jasmine.github.io/2.5/introduction)
 - [Protractor](http://www.protractortest.org)
 - [Node (LTS)](https://nodejs.org/en/)

### Additional info & reading lists : 

Protractor 

 - [Starter Tutorial](http://www.protractortest.org/#/tutorial)
 - [TOC](http://www.protractortest.org/#/toc)
 - http://www.protractortest.org/#/locators
 - http://www.protractortest.org/#/api?view=webdriver.WebElement
 - http://www.protractortest.org/#/infrastructure
 - http://www.protractortest.org/#/api?view=ElementFinder.prototype.element
 - https://github.com/bcaudan/jasmine-spec-reporter/blob/master/examples/protractor/protractor.conf.js

WebDriverJS

 - https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs

### Environment Variables
Currently uses [dotenv](https://www.npmjs.com/package/dotenv)
An example is saved here: 
H:\Public\ICT\QA\05 Tools\04 Protractor

Add a .env locally to root of project and add data e.g. 

    MY_LOGIN=name@email.com
    MY_PASS=StrongPa55w0rd!

Call data in test with 

    process.env.MY_LOGIN


### Reporting 
Jasmine allows multiple reporters - just add to protractor configuration. 

The tooling is currently using

* [jasmine-spec-reporter](https://www.npmjs.com/package/jasmine-spec-reporter)- console reporter
* [protractor-jasmine2-html-reporter](https://www.npmjs.com/package/protractor-jasmine2-html-reporter) - generates an HTML report with screenshots

Other options: 
[jasmine-reporters](https://www.npmjs.com/package/jasmine-reporters)
* Collection of Javascript reporter classes including NUNIT/JUNIT

## Install

    npm install -g protractor
    npm install 

## Setup

    webdriver-manager update
    webdriver-manager start

## Run the tests 

    npm test