// const { Eyes, Target } = require('@applitools/eyes.webdriverio')
// const { ConsoleLogHandler } = require('@applitools/eyes.sdk.core')
// const Eyes = require('eyes.selenium').Eyes

// const eyes = new Eyes()
// Set API key to something meaningful!
// eyes.setApiKey('12345')
// eyes.setLogHandler(new ConsoleLogHandler(true))

describe('The Main Page', () => {
    beforeAll(() => {
        // eyes.open(browser, 'Test App', 'Main')
    })

    beforeEach(() => {
        // Group tests with a Batch
        // eyes.setBatch('Dashboard')
        // eyes.open(browser, 'Test App', 'Main')
    })

    afterEach(() => {
        // eyes.close()
    })

    it('should be able to be compared with applitools', () => {
        browser.pause(3000)
        console.log('Before Checkwindow')
        browser.checkWindow('Main')
        // eyes.check('Main', Target.window())
        console.log('After Checkwindow')
    })
})
