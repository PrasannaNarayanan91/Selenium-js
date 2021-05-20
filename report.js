// feature under development
let options = {
    theme: 'bootstrap',
    jsonDir: './output/report/cucumber-json-report.json',
    output: './output/report/cucumber-html-report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "Test Environment": `${process.env.NODE_ENV}`,
        "Browser": `${process.argv[8]}`,
    }
};

reporter.generate(options);
