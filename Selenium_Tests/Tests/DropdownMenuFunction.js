const homePage = require('../pageObjects/basePage');
const dropdownMenu = require('../pageObjects/DropdownMenu_Object');
const chai = require('chai');
const expect = chai.expect;

describe('Dropdown menu function', () => {

  before(() => {
    homePage.go_to_url();
  });

  after(() => {
    homePage.quit_test();
  });

  it('should have default settings', async () => {
    const buttonText = await dropdownMenu.find_button();
    expect(buttonText).to.equal('Option 1');
  });

  it('should select the `Option 3` item', () => {
    dropdownMenu.click_button();
    dropdownMenu.select_item();
  });
});
