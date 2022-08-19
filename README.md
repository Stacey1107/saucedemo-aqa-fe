# E2E UI

## Get started

### For running tests on your local machine the following steps should be fulfilled:

1. Install Node.js (https://nodejs.org/en/)
2. Install Java (https://www.java.com/en/)
3. Run `npm i` command to install packages
4. Start up a Selenium Server by running the following commands in a different terminal:

- `npm run webdriver-update`
- `npm run selenium-start`

5. Leave the terminal open where you've launched a Selenium Server
6. In another terminal run `npm test` (this command will run 'add.product.to.cart.ts' test)
7. See test result in the terminal
