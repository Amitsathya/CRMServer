import express from 'express'
import {
  getProducts,
  createProduct,
  updateProduct,
  getProductList,
  deleteProduct,
  getProductById,
} from '../controllers/ProductController.js'

let router = express.Router()
router.get('/products', getProducts)
router.get('/productDropdown', getProductList)
router.get('/getProductById/:id', getProductById)
router.post('/createProduct', createProduct)
router.post('/updateProduct', updateProduct)
router.post('/deleteProduct', deleteProduct)

export default router
