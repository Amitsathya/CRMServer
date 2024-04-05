import express from 'express'
import {
  getVisits,
  getActiveVisits,
  createVisit,
  updateVisit,
  deleteVisit,
  getVisitById,
} from '../controllers/VisitController.js'

let router = express.Router()
router.get('/visits', getVisits)
router.get('/activeVisits', getActiveVisits)
router.get('/getVisitById/:id', getVisitById)
router.post('/createVisit', createVisit)
router.post('/updateVisit', updateVisit)
router.post('/deleteVisit', deleteVisit)

export default router
