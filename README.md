# Google Search with Cypress
This project is a demonstration of using Cypress to automate a Google search and check the title of the second result link. It uses the Cypress testing framework and the Cypress-plugin-tab to open the search result in a new tab.

## Requirements

Node.js version 14 or higher
Cypress version 6 or higher
cypress-plugin-tab version 3 or higher

## Installation
1. Clone this repository
2. Run npm install in the project folder
3. Run npx cypress open to open the Cypress test runner and run the tests

## Configuration

In order to disable chrome web security, you need to add the following line of code in the cypress.config.js file:

Cypress.config("chromeWebSecurity", false);

## Recommendations

Make sure you have the latest version of Node.js and Cypress installed
Always check the Cypress documentation for the latest updates and best practices

## Conclusions

This project shows how easy it is to automate a Google search with Cypress and how powerful the Cypress-plugin-tab can be for testing web pages that open in new tabs. Keep in mind that for security reasons, some sites may block the opening of a new tab, and the chromeWebSecurity has to be disabled. With this in mind, it's important to keep your Cypress version, Node.js version and the versions of the packages used up to date.

## Bonus

I included a .mp4 video file of the latest execution of this code in the cypress runner as evidence that it works by the moment I  pushed this code to GitHub.