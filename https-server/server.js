const path = require('path')
const fs = require('fs')
const express = require('express')
const https = require('https')

const certOptions = {
    key: fs.readFileSync(path.resolve('.local-https/server.key')),
    cert: fs.readFileSync(path.resolve('.local-https/server.crt'))
}

const app = express()
app.use('/', express.static(path.dirname(__dirname) + '/public'));

const server = https.createServer(certOptions, app).listen(8443);
