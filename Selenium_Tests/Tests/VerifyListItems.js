const homePage = require('../pageObjects/basePage');
const checkList = require('../pageObjects/VerifyListItems_Object');
const chai = require('chai');
const expect = chai.expect;

describe('Checking items in a list', () => {

  before(() => {
    homePage.go_to_url();
  });

  after(() => {
    homePage.quit_test();
  });

  it('should have three values in the listgroup', async () => {
    expect(await checkList.number_of_li()).to.equal(3);
  });

  it('should assert that the second item is "List Item 2"', async () => {
    const { text } = await checkList.get_second_item();
    expect(text).to.equal('List Item 2');
  });

  it('should assert that the second item badge value is 6', async () => {
    const { spanText } = await checkList.get_second_item();
    expect(spanText).to.equal('6');
  });
});
