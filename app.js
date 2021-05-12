const config = require('config')
const {connect} = require('./database/database')
const express = require('express')

const app = express()

connect()

const PORT = config.get('PORT') || 5000

app.listen(PORT,() => {console.log('App has been started...')})
