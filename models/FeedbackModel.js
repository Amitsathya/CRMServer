import { Sequelize } from 'sequelize'
import db from '../config/Database.js'

const { DataTypes } = Sequelize

let Feedback = db.define(
  'feedbacks',
  {
    feedbackId: {
      type: Sequelize.NUMBER,
      primaryKey: true,
      autoIncrement: true,
    },
    customerId: DataTypes.NUMBER,
    feedback: DataTypes.STRING,
    rating: DataTypes.NUMBER,
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
)

export default Feedback
