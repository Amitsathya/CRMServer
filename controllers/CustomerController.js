import Customer from '../models/CustomerModel.js'
import { QueryTypes } from 'sequelize'
import db from '../config/Database.js'

export const getCustomers = async (req, res, next) => {
  try {
    const response = await Customer.findAll()
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const createCustomer = async (req, res, next) => {
  try {
    console.log(req.body)
    await Customer.create(req.body).then((result) =>
      res.status(201).json({ data: result.customerId, msg: 'Customer Created' })
    )
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const updateCustomer = async (req, res, next) => {
  try {
    await Customer.update(req.body, {
      where: {
        customerId: req.body.customerId,
      },
    })
    res.status(200).json({ msg: 'Customer Updated' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const deleteCustomer = async (req, res, next) => {
  try {
    await Customer.destroy({
      where: {
        customerId: req.body.customerId,
      },
    })
    res.status(200).json({ msg: 'Customer Deleted' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const getCustomerById = async (req, res, next) => {
  try {
    const id = req.params.id
    const response = await db.query(
      `select * from customers c where c.customerId=${id};`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}
