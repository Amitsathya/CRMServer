import { Sequelize } from 'sequelize'
import db from '../config/Database.js'

const { DataTypes } = Sequelize

let Service = db.define(
  'services',
  {
    serviceId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.NUMBER,
    status: DataTypes.NUMBER,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export default Service
