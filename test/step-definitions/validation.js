let { Given, Then, When, And } = require('@cucumber/cucumber')

Given('Validated application launch', async () => {
  expect(await driver.getTitle()).to.equal('Jupiter Toys')
});

Then('Validate the {string} field validation error as {string}', async (fieldName, error) => {
  assert.equal(await driver.findElement({ id: `${fieldName.toLowerCase()}-err` }).getText(), error)
})

Then('Validate error message removed for field {string}', async (fieldName) => {
  assert.equal(await driver.findElements({ id: `${fieldName.toLowerCase()}-err` }), 0)
})

Then('Validate submission successful page', async () => {
  let element = await driver.wait(seleniumWebdriver.until.elementLocated({ className: `alert-success` }), constants.waitTime);
  assert.equal(await element.getText(), 'Thanks Test, we appreciate your feedback.')
})

Then('Wait for page to navigate', async () => {
  await driver.wait(seleniumWebdriver.until.elementLocated({ className: `alert` }), constants.waitTime);
})

Then('Validate cart list has {int} {string}', async (value, product) => {
  let element = await driver.wait(seleniumWebdriver.until.elementLocated({ xpath: `//td[contains(text(),'${product}')]/following-sibling::td/input` }), constants.waitTime).getAttribute("value")
  assert.equal(parseInt(element), value)
})