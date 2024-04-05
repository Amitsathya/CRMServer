import { Sequelize } from 'sequelize'
import db from '../config/Database.js'

const { DataTypes } = Sequelize

let Customer = db.define(
  'employees',
  {
    employeeId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    createdAt: DataTypes.DATEONLY,
    status: DataTypes.NUMBER,
    services: DataTypes.JSON,
    position: DataTypes.STRING,
    department: DataTypes.STRING,
    salary: DataTypes.NUMBER,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export default Customer
