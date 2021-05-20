let { Given, Then, When } = require('@cucumber/cucumber');

Then('Enter {string} in {string} field', async (value, fieldName) => {
    await driver.findElement({ id: `${fieldName.toLowerCase()}` }).sendKeys(value)
})

Then('Add {int} {string} to cart', async (count, product) => {
    for (let times = 0; times < count; times++) {
        await driver.wait(seleniumWebdriver.until.elementLocated({ xpath: `//*[contains(text(),'${product}')]/parent::div/p/a` }), constants.waitTime).click();
    }
})