import express from 'express'
import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeById,
} from '../controllers/EmployeeController.js'

let router = express.Router()
router.get('/employees', getEmployees)
router.get('/getEmployeeById/:id', getEmployeeById)
router.post('/createEmployee', createEmployee)
router.post('/updateEmployee', updateEmployee)
router.post('/deleteEmployee', deleteEmployee)

export default router
