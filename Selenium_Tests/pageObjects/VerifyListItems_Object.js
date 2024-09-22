const { By } = require('selenium-webdriver');

class VerifyList {

  async number_of_li() {
    return (await driver.findElements(By.css('.list-group-item'))).length;
  }

  async get_second_item() {
    const secondItem = await driver.findElement(By.css('#test-2-div .list-group-item:nth-of-type(2)'));
    return {
      text: (await secondItem.getText()).replace(/\d+$/, '').trim(),
      spanText: await secondItem.findElement(By.css('span')).getText(),
    };
  }
}

module.exports = new VerifyList();