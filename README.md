# How to
1. Install build dependencies and setup environment (android sdk, node, npm, yarn, react-native cli etc.)
2. Clone repository
3. ```yarn install --pure-lockfile```
4. Adjust ```wdio.conf.visual-check.js``` with supported device capabilities (most importantly Android version)
5. Update Applitools API key in ```dashboard-test.js```
6. Build apk ```yarn assemble```
7. Open new terminal & start seleniumgrid ```yarn test-e2e-startSeleniumGrid```
8. Open another new terminal & start appium node. This shell needs ANDROID_HOME env var set to the android SDK root dir ```./e2e-test/resource/appium-node-android.sh```
9. Run test ```HOST_IP=127.0.0.1 yarn test-e2e-visual-check```

After running the tests, logs can be found in ```./testResults/visual/```
