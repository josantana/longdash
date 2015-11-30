var driver = require('browserstack-webdriver');

// Input capabilities
var capabilities = {
    'browserName' : 'firefox',
    'browserstack.user' : 'XXX',
    'browserstack.key' : 'XXX'
};

var browser = new driver.Builder().
    usingServer('http://hub.browserstack.com/wd/hub').
    withCapabilities(capabilities).
    build();

browser.get('http://www.google.com/ncr');
browser.findElement(driver.By.name('q')).sendKeys('BrowserStack');
browser.findElement(driver.By.name('btnG')).click();

browser.getTitle().then(function (title) {
    console.log(title);
});

browser.quit();
