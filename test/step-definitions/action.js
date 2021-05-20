let { Given, Then, When } = require('@cucumber/cucumber');

Then('Click menu {string}', async (option) => {
    await click.link(option)
  })

Then('Click button {string}', async(button)=>{
    await click.button(button)
})  