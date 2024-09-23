var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({ implicit: (10000) });

class BasePage {
  constructor() {
    global.driver = driver;
  };

  go_to_url(theURL) {
    driver.get('file:///C:/Users/vv449/study/Selenium_Tests/QE-index.html');
  };

  quit_test() {
    driver.quit();
  };
};

module.exports = new BasePage();
