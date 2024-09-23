# Selenium Testing Project - POM

## Project Description

This project is an automation framework for testing a web page using Selenium with JavaScript. It focuses on key functionalities, including:

- User login and navigation.
- Validation of input fields and buttons.
- Interaction with page elements.
- Assertions on dynamic content.

The Page Object Model (POM) design pattern is used to enhance code readability and facilitate easier modifications. Each element interacted with by the code has been assigned a relevant identifier.

## How to Run the Project

1. Run `npm install`
2. Install Selenium: `npm install selenium-webdriver --save-dev`
3. Install ChromeDriver: `npm install chromedriver`
4. Install Mocha: `npm install mocha`
5. Execute Selenium tests, e.g., `npm test ./Tests/LoginFunction.js`
6. Before running the tests, ensure that you modify the file path in the `BasePage` class. The path should point to your local version of **[QE-index.html](./QE-index.html)** for example:
   `driver.get('file:///C:/Your/Local/Path/QE-index.html');`

## Test Locations

- **Tests**: Contains the test scripts validating application functionality in the `./Tests` folder.
- **pageObjects**: Contains methods for interacting with web page elements in the `./pageObjects` folder.

## Project Structure

- **[Tests](./Tests)**: Contains the test scripts that validate the functionality of the application.
- **[pageObjects](./pageObjects)**: Contains the methods for interacting with the elements on the web pages.
- **[QE-index.html](./QE-index.html)**: The HTML file to which the tests are written.
- **[QE-guide.html](./QE-guide.html)**: A document outlining the tasks and requirements for the tests.
