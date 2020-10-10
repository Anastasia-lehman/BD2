require('dotenv').config()
const { Client } = require('pg')
const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

const name = '1 or 1 = 1'

client.connect()
async function addCar() {
    const car = {
        brandID: 1,
        model: '420i',
        cost: 25000000,
        year: 2019,
        isAvaible: true,
    }
    try {
        // start transction
        await client.query('BEGIN')
        const res = await client.query(
            `
        INSERT INTO car (brand_id,model,cost,year_of_creation,is_avaible) VALUES
        ($1,$2,$3,$4,$5) RETURNING id
    `,
            [car.brandID, car.model, car.cost, car.year, car.isAvaible]
        )

        const carID = res.rows[0].id
        const resManager = await client.query(`
    SELECT *
    FROM manager
    WHERE car_id IS NULL
    LIMIT 1
    `)
        const managerID = resManager.rows[0].id

        await client.query(
            `
        UPDATE manager 
        SET car_id = $1
        WHERE id = $2
    `,
            [carID, managerID]
        )
        await client.query('COMMIT')
    } catch (err) {
        client.query('ROLLBACK')
        throw err
    } finally {
        client.end()
    }
}
addCar()
// client
//     .query('SELECT NOW()')
//     .then((result) => console.log(result))
//     .catch((e) => console.error(e.stack))
//     .then(() => client.end())

// 1 по указанному id менять статус на false
// 2 по указанному id снижать цену на 10 %

// 1 получить все id машин старше 2018
// 2 снизить цену на полученные авто на 5%

// 1 добавить новый автомобиль
// 2 получить одного свободного менеджера
// 3 назначить ему для продажи новый автомобиль

// client.connect()
// client.query(`
//     SELECT *
//     FROM student
//     WHERE name = $1
//     `,[name],function(err,res){
//     console.log(err,res)
//     client.end()
// })
console.log(1)