import express from 'express'
import {
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
  getInventoryById,
} from '../controllers/InventoryController.js'

let router = express.Router()
router.get('/inventory', getInventory)
router.get('/getInventoryById/:id', getInventoryById)
router.post('/createInventory', createInventory)
router.post('/updateInventory', updateInventory)
router.post('/deleteInventory', deleteInventory)

export default router
