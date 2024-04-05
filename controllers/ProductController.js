import Product from '../models/ProductModel.js'
import { QueryTypes } from 'sequelize'
import db from '../config/Database.js'

export const getProducts = async (req, res, next) => {
  try {
    const response = await Product.findAll()
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const createProduct = async (req, res, next) => {
  try {
    console.log(req.body)
    await Product.create(req.body).then((result) =>
      res.status(201).json({ data: result.productId, msg: 'Product Created' })
    )
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const getProductList = async (req, res, next) => {
  try {
    const response = await db.query(`select name, productId from products;`, {
      type: QueryTypes.SELECT,
    })
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    await Product.update(req.body, {
      where: {
        productId: req.body.productId,
      },
    })
    res.status(200).json({ msg: 'Product Updated' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.destroy({
      where: {
        productId: req.body.productId,
      },
    })
    res.status(200).json({ msg: 'Product Deleted' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const id = req.params.id
    const response = await db.query(
      `select * from products c where c.productId=${id};`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}
