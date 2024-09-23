const loginFunction = require('../pageObjects/LoginFunction_Object');
const homePage = require('../pageObjects/basePage');
const chai = require('chai');
const expect = chai.expect;

describe('The `Login` function', () => {

  before(() => {
    homePage.go_to_url();
  });

  after(() => {
    homePage.quit_test();
  });

  it('should find `email`, `password`, and `Sign in` button', () => {
    expect(loginFunction.find_email_field()).to.be.true;
    expect(loginFunction.find_password_field()).to.be.true;
    expect(loginFunction.find_login_button()).to.be.true;
  });

  it('should input data to the fields', () => {
    loginFunction.type_email('test@email.ca');
    loginFunction.type_password('Test1234!')
  });
});
