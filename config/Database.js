import { Sequelize } from 'sequelize'
import {} from 'dotenv/config'

var db = new Sequelize('crm', process.env.DB_USERNAME, '', {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  timezone: '-04:00',
})

export default db
