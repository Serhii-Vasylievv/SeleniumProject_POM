const { By, until } = require('selenium-webdriver');

class Alert {

  async button_is_displayed() {
    const button = await driver.findElement(By.css('#test5-button'));

    await driver.wait(until.elementIsVisible(button), 15000);
    return button.isDisplayed();
  };

  async click_button() {
    return await driver.findElement(By.css('#test5-button')).click();
  };

  async alert_message() {
    const alert = await driver.findElement(By.css('#test5-alert'));

    await driver.wait(until.elementIsVisible(alert), 10000);
    return alert.getText();
  };

  async button_not_active() {
    const checkButton = await driver.findElement(By.css('#test5-button')).getAttribute('disabled');
    return checkButton !== null;
  };
};

module.exports = new Alert();
