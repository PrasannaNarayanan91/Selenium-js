async function link(link) {
    await driver.findElement({ linkText: `${link}` }).click()
}

async function button(button) {
    await driver.wait(seleniumWebdriver.until.elementLocated({ xpath: `//*[contains(text(),'${button}')]` }), constants.waitTime).click()
}

module.exports = {
    link,
    button
}