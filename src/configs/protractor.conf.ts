const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const TSNode = require('ts-node');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../tests/*.ts'],
  onPrepare() {
    TSNode.register({
      project: 'tsconfig.json',
    });
    jasmine.getEnv().addReporter(
      new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true,
      }),
    );
  },
};
