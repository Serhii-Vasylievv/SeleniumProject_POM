const homePage = require('../pageObjects/basePage');
const table = require('../pageObjects/AssertGridValues_Object');
const chai = require('chai');
const expect = chai.expect;

describe('Table', () => {

  before(() => {
    homePage.go_to_url();
  });

  after(() => {
    homePage.quit_test();
  });

  it('should get expected values', async () => {
    expect(await table.getCellValue(2, 2)).to.equal('Ventosanzap');
    expect(await table.getCellValue(2, 0)).to.equal('Thadeus');
    expect(await table.getCellValue(0, 1)).to.equal('Tinmouth');
  });
});


