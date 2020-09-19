//точка входа
require('dotenv').config() //load .env to procces .env
const {Client} = require('pg')
const client = new Client({

    host: '95.217.232.188',
    port: 7777,
    user: "anisimova",
    password: "123123123",
    database: "anisimova"
})

client.connect()
client.query('SELECT NOW()', (err,res) => {
    console.log(err,res)
    client.end()
})
