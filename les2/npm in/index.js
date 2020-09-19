//точка входа
require('dotenv').config() //load .env to procces .env
const {Client} = require('pg')
const client = new Client({

    host:process.env.DB_HOST, //'95.217.232.188',
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE
})

const name = 'name1'

client.connect()
client
  .query(`  SELECT *
           From test
            WHERE name = $1
            `, [name])
  .then(result => console.log(result))
  .catch(e => console.error(e.stack))
  .then(() => client.end())


// client.connect()
// client.query(`
//             SELECT *
//             From test
//             WHERE name = '${name}' ` // уязвим к sql иньекциям
//              , (err,res) => { //=> THE SAME AS FUNCTION
//     console.log(err,res)
//     client.end()
// })

/*
параметрезованный запрос
const { Client } = require('pg')
const client = new Client()
client.connect()
client.query('SELECT $1::text as name', ['brianc'], (err, res) => {
  if (err) throw err
  console.log(res)
  client.end()
})

*/