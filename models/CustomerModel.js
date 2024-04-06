import { Sequelize } from 'sequelize'
import db from '../config/Database.js'

const { DataTypes } = Sequelize

let Customer = db.define(
  'customers',
  {
    customerId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    fName: DataTypes.STRING,
    lName: DataTypes.STRING,
    createdAt: DataTypes.DATEONLY,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    source: DataTypes.STRING,
    status: DataTypes.NUMBER,
    age: DataTypes.NUMBER,
    sex: DataTypes.STRING,
    notes: DataTypes.STRING,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export default Customer
