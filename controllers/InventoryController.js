import Inventory from '../models/InventoryModel.js'
import { QueryTypes } from 'sequelize'
import db from '../config/Database.js'

export const getInventory = async (req, res, next) => {
  try {
    const response = await db.query(
      `select * from inventory i inner join products p on i.productId = p.productId;`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const createInventory = async (req, res, next) => {
  try {
    console.log(req.body)
    await Inventory.create(req.body).then((result) =>
      res.status(201).json({ data: result.itemId, msg: 'Inventory Created' })
    )
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const updateInventory = async (req, res, next) => {
  try {
    await Inventory.update(req.body, {
      where: {
        itemId: req.body.itemId,
      },
    })
    res.status(200).json({ msg: 'Inventory Updated' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const deleteInventory = async (req, res, next) => {
  try {
    await Inventory.destroy({
      where: {
        itemId: req.body.itemId,
      },
    })
    res.status(200).json({ msg: 'Inventory Deleted' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const getInventoryById = async (req, res, next) => {
  try {
    const id = req.params.id
    const response = await db.query(
      `select * from inventory i inner join products p on p.productId = i.productId where i.itemId=${id};`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}
