let config = require('konfig')({ path: './test/config' })

module.exports = {
    baseURL: config.properties.baseURL,
    pageTimeOut: config.properties.pageTimeOut,
    waitTime: config.properties.waitTime
}