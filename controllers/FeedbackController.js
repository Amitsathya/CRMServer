import Feedback from '../models/FeedbackModel.js'
import { QueryTypes } from 'sequelize'
import db from '../config/Database.js'

export const getFeedbacks = async (req, res, next) => {
  try {
    const response = await db.query(
      `select f.*, fName, lName from feedbacks f inner join customers c on f.customerId = c.customerId;`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const createFeedback = async (req, res, next) => {
  try {
    console.log(req.body)
    await Feedback.create(req.body).then((result) =>
      res.status(201).json({ data: result.feedbackId, msg: 'Feedback Created' })
    )
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const updateFeedback = async (req, res, next) => {
  try {
    await Feedback.update(req.body, {
      where: {
        feedbackId: req.body.feedbackId,
      },
    })
    res.status(200).json({ msg: 'Feedback Updated' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const deleteFeedback = async (req, res, next) => {
  try {
    await Feedback.destroy({
      where: {
        feedbackId: req.body.feedbackId,
      },
    })
    res.status(200).json({ msg: 'Feedback Deleted' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const getFeedbackById = async (req, res, next) => {
  try {
    const id = req.params.id
    const response = await db.query(
      `select * from feedbacks c where c.feedbackId=${id};`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}
