const { join } = require('path')

exports.config = {
    hostname: 'localhost',
    baseUrl: 'http://localhost',
    port: 4723,
    path: '/wd/hub',
    specs: ['./test/specs/**/*.js'],
    framework: 'mocha',
    waitforTimeout: 18000,
    maxInstances: 10,
    reporters: [ 'spec'],
    capabilities: [
        {
            deviceName: "samsung-galaxy-s20",
            platformName: "Android",
            platformVersion: "13",
            automationName: "UiAutomator2",
            app: join(process.cwd(), './app/android/woocommerce.apk'),
            appPackage: "com.woocommerce.android",
            appActivity: "com.woocommerce.android.ui.main.MainActivity",
            appWaitActivity: "com.woocommerce.android.ui.login.LoginActivity",
            udid: "RX8N305B2CK",
            noReset: "true",
        }
    ],
    before: function () {
        return {
            shortCircuit: true,
        };
    },
}

