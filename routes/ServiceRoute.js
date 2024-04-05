import express from 'express'
import {
  getServices,
  createService,
  updateService,
  deleteService,
  getServiceById,
} from '../controllers/ServiceController.js'

let router = express.Router()
router.get('/services', getServices)
router.get('/getServiceById/:id', getServiceById)
router.post('/createService', createService)
router.post('/updateService', updateService)
router.post('/deleteService', deleteService)

export default router
