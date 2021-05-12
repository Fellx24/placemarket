const config = require('config')
const e = require('express')
const { Client } = require('pg')

const client = new Client(config.get('DATABASE'))

const connect = () => {
    client.connect(err =>{
        if (err) {
            console.error('Database connection error', err.stack)
        } else {
            console.log('Database connect...')
        }
    })
}
module.exports = {client,connect}