const { By, Key } = require('selenium-webdriver');

class LoginFunction {

  find_email_field() {
    const emailField = driver.findElement(By.css('#inputEmail')).isDisplayed();
    return emailField !== null;
  };

  find_password_field() {
    const password = driver.findElement(By.css('#inputPassword')).isDisplayed();
    return password !== null;
  };

  find_login_button() {
    const button = driver.findElement(By.css('button.btn.btn-lg.btn-primary.btn-block[type="submit"]')).isDisplayed();
    return button !== null;
  };

  type_email(emailAddress) {
    driver.findElement(By.css('#inputEmail')).sendKeys(emailAddress, Key.RETURN);
  };

  type_password(password) {
    driver.findElement(By.css('#inputPassword')).sendKeys(password, Key.RETURN);
  };
};

module.exports = new LoginFunction;
