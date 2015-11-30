var assert = require('assert'),
    fs = require('fs'),
    chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

var driver = require('browserstack-webdriver')
    test = require('browserstack-webdriver/testing');

test.describe('Google Search', function() {

    var browser,
        server;

    test.before(function () {

        var capabilities = {
            'browserName' : 'firefox',
            'browserstack.user' : 'XXX',
            'browserstack.key' : 'XXX'
        };

        browser = new driver.Builder().
            usingServer('http://hub.browserstack.com/wd/hub').
            withCapabilities(capabilities).
            build();
    });

    test.it('should append query to title', function() {

        browser.get('http://www.google.com');
        browser.findElement(driver.By.name('q')).sendKeys('Dell');
        browser.findElement(driver.By.name('btnG')).click();

        browser.wait(function () {
            return browser.getTitle().then(function (title) {
                return 'Dell - Google Search' === title;
            });
        }, 1000);

    });

    test.it('window is defined', function() {
        browser.findElement(window).should.have.property('location');
    });

    test.after(function () { browser.quit(); });
});
