const { By } = require('selenium-webdriver');

class Table {

  async getCellValue(rowIndex, colIndex) {
    const table = await driver.findElement(By.css('.table'));
    const cell = await table.findElement(By.xpath(`tbody/tr[position()=${rowIndex + 1}]/td[position()=${colIndex + 1}]`));
    return await cell.getText();
  }
}

module.exports = new Table;
