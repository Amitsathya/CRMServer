import express from 'express'
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerById,
} from '../controllers/CustomerController.js'

let router = express.Router()
router.get('/customers', getCustomers)
router.get('/getCustomerById/:id', getCustomerById)
router.post('/createCustomer', createCustomer)
router.post('/updateCustomer', updateCustomer)
router.post('/deleteCustomer', deleteCustomer)

export default router
