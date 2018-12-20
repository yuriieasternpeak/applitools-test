/**
 * Device type agnostic element selector/locator functions
 */

const androidUiSelector = 'android=new UiSelector()'
// const androidId = 'android=new UiSelector().resourceId("com.android:id/'
// const myPackageId = 'android=new UiSelector().resourceId("com.my.package:id/'

// TODO: Extend with iOS selector and make failsafe
function selectByText (textContent) {
    return androidUiSelector + '.text("' + textContent + '")'
}

function selectByAccessibilityId (id) {
    return `~${id}`
}

module.exports = { selectByText, selectByAccessibilityId }
