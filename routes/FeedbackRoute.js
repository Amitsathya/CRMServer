import express from 'express'
import {
  getFeedbacks,
  createFeedback,
  updateFeedback,
  deleteFeedback,
  getFeedbackById,
} from '../controllers/FeedbackController.js'

let router = express.Router()
router.get('/feedbacks', getFeedbacks)
router.get('/getFeedbackById/:id', getFeedbackById)
router.post('/createFeedback', createFeedback)
router.post('/updateFeedback', updateFeedback)
router.post('/deleteFeedback', deleteFeedback)

export default router
