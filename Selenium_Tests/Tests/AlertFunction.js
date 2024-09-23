const homePage = require('../pageObjects/basePage');
const alert = require('../pageObjects/AlertFunction_Object');
const chai = require('chai');
const assert = chai.assert;

describe('The "PopUp message" function', () => {

  before(() => {
    homePage.go_to_url();
  });

  after(() => {
    homePage.quit_test();
  });

  it('should have the active button', async () => {
    assert.isTrue(await alert.button_is_displayed(), 'Button is visible');
    await alert.click_button();
  });

  it('should get alert message', async () => {
    assert.equal(await alert.alert_message(), 'You clicked a button!');
  });

  it('should be disabled after click (button)', async () => {
    assert.isTrue(await alert.button_not_active(), 'Second button should be disabled');
  });
});
