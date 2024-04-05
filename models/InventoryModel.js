import { Sequelize } from 'sequelize'
import db from '../config/Database.js'

const { DataTypes } = Sequelize

let Inventory = db.define(
  'inventory',
  {
    itemId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: DataTypes.NUMBER,
    location: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export default Inventory
