const { By } = require('selenium-webdriver');

class DropdownMenu {

  async find_button() {
    return await driver.findElement(By.css('#dropdownMenuButton')).getText();
  }

  async click_button() {
    return await driver.findElement(By.css('#dropdownMenuButton')).click();
  }

  async select_item() {
    return await driver.findElement(By.css('.dropdown-item:nth-child(3)')).click();
  }
}

module.exports = new DropdownMenu();
