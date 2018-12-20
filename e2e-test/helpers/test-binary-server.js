/**
 * Used to serve binary distributions created by the build process.
 * A remote selenium grid would otherwise have no access to the pre-built
 * apps created on a different server.
 */
'use strict'

const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, '/static')))

app.get('/test.apk', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../android/app/build/outputs/apk/release/app-release.apk'))
})

let server

exports.start = function () {
    server = app.listen(3000)
}

exports.stop = function () {
    server.close()
}
