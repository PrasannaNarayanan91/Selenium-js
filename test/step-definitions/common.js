global.constants = require('./constants.js')
global.fs = require('file-system')
global.reporter = require('cucumber-html-reporter')
global.seleniumWebdriver = require('selenium-webdriver')
global.driver = null // driver will be loadded as part of hooks
global.moment = require('moment')
global.utils = require('./utils')
global.chai = require('chai')  
global.assert = chai.assert
global.expect = chai.expect
global.should = chai.should()
global.By = require('selenium-webdriver')
global.until = require('selenium-webdriver')
global.key = require('selenium-webdriver')

//support 
global.click = require('./support/click')


//locators 
global.link = require('./identifiers/link')
global.button = require('./identifiers/button')
