let { After, AfterAll, Before, BeforeAll, Status, setDefaultTimeout } = require('@cucumber/cucumber')
let browser = process.argv[8] // let browser = "chrome" // this commented line will be usefull during debugging
let testEnv = process.env.NODE_ENV

BeforeAll(async function () {
    console.log(`execution started in ENV = ${testEnv} at ${await utils.getTime('DD-MM-YY HH:mm:ss')}`)
    driver = new seleniumWebdriver.Builder()
        .forBrowser(`${browser}`)
        .build()
});

Before(async function () {
    console.log('Application launched ', constants.baseURL)
    setDefaultTimeout(60 * constants.pageTimeOut);
    return await driver.get(`${constants.baseURL}`);
});

After(async function (scenario) {
    let scenarioName = scenario.pickle.name
    console.log(`Executed scenario : ${scenarioName}`)
    if (scenario.result.status === Status.FAILED) {
        console.log(`Test failed: ${scenarioName}`)
        let image = await driver.takeScreenshot()
        await fs.writeFile(`./output/screenshot/failed-${await utils.getTime('DD-MM-YY HH:mm:ss')}-${scenarioName}.png`, image, 'base64', function (err) {
            console.log('Failed to upload screenshot error: ', err);
        });
    }
});

AfterAll(async function () {
    console.log(`Execution finished in ENV = ${testEnv} at ${await utils.getTime('DD-MM-YY HH:mm:ss')}`);
    await driver.quit();
});


