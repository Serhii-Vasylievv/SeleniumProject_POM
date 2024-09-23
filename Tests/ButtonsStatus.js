const homePage = require('../pageObjects/basePage');
const buttonsStatus = require('../pageObjects/ButtonsStatus_Object');
const chai = require('chai');
const expect = chai.expect;

describe('Buttons status', () => {

  before(() => {
    homePage.go_to_url();
  });

  after(() => {
    homePage.quit_test();
  });

  it('should be enabled the `first` button', async () => {
    const isEnabled = await buttonsStatus.primery_button();
    expect(isEnabled).to.be.true;
  });

  it('should be disabled the `second` button', async () => {
    const isDisabled = await buttonsStatus.second_button();
    expect(isDisabled).to.be.true;
  });
});
