import Service from '../models/ServiceModel.js'
import { QueryTypes } from 'sequelize'
import db from '../config/Database.js'

export const getServices = async (req, res, next) => {
  try {
    const response = await Service.findAll()
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const createService = async (req, res, next) => {
  try {
    console.log(req.body)
    await Service.create(req.body).then((result) =>
      res.status(201).json({ data: result.serviceId, msg: 'Service Created' })
    )
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const updateService = async (req, res, next) => {
  try {
    await Service.update(req.body, {
      where: {
        serviceId: req.body.serviceId,
      },
    })
    res.status(200).json({ msg: 'Service Updated' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const deleteService = async (req, res, next) => {
  try {
    await Service.destroy({
      where: {
        serviceId: req.body.serviceId,
      },
    })
    res.status(200).json({ msg: 'Service Deleted' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const getServiceById = async (req, res, next) => {
  try {
    const id = req.params.id
    const response = await db.query(
      `select * from services c where c.serviceId=${id};`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}
