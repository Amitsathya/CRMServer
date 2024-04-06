import { Sequelize } from 'sequelize'
import db from '../config/Database.js'

const { DataTypes } = Sequelize

let Visit = db.define(
  'visits',
  {
    visitId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerId: DataTypes.NUMBER,
    employeeId: DataTypes.NUMBER,
    feedbackId: DataTypes.NUMBER,
    itemId: DataTypes.NUMBER,
    serviceId: DataTypes.NUMBER,
    visitDate: DataTypes.DATE,
    status: DataTypes.NUMBER,
    itemQuantity: DataTypes.NUMBER,
    endDate: DataTypes.DATE,
    duration: DataTypes.STRING,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export default Visit
