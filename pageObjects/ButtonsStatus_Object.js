const { By } = require('selenium-webdriver');

class Buttons {

  primery_button() {
    return driver.findElement(By.css('#test-4-div button.btn.btn-primary')).isEnabled();
  };

  async second_button() {
    const checkButton = await driver.findElement(By.css('#test-4-div button.btn.btn-secondary')).getAttribute('disabled');
    return checkButton !== null;
  };
};

module.exports = new Buttons();
