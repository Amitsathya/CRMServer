import Visit from '../models/VisitModel.js'
import { QueryTypes } from 'sequelize'
import db from '../config/Database.js'

export const getVisits = async (req, res, next) => {
  try {
    const response = await db.query(
      `select v.*, c.fName as customerfName, c.lName  as customerlName, e.fName as employeefName, e.lName as employeelName, s.name as serviceName 
      from visits v 
      inner join customers c on v.customerId = c.customerId
      left join services s on v.serviceId = s.serviceId 
      left join employees e on e.employeeId = v.employeeId ;`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const getActiveVisits = async (req, res, next) => {
  try {
    const response = await db.query(
      `select v.*, c.fName as customerfName, c.lName  as customerlName, e.fName as employeefName, e.lName as employeelName, s.name as serviceName 
        from visits v 
        inner join customers c on v.customerId = c.customerId 
        left join services s on v.serviceId = s.serviceId 
        left join employees e on e.employeeId = v.employeeId 
        where 
        v.status = 0 or 
        v.status = 1`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const createVisit = async (req, res, next) => {
  try {
    console.log(req.body)
    await Visit.create(req.body).then((result) =>
      res.status(201).json({ data: result.visitId, msg: 'Visit Created' })
    )
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const updateVisit = async (req, res, next) => {
  try {
    await Visit.update(req.body, {
      where: {
        visitId: req.body.visitId,
      },
    })
    res.status(200).json({ msg: 'Visit Updated' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const deleteVisit = async (req, res, next) => {
  try {
    await Visit.destroy({
      where: {
        visitId: req.body.visitId,
      },
    })
    res.status(200).json({ msg: 'Visit Deleted' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const getVisitById = async (req, res, next) => {
  try {
    const id = req.params.id
    const response = await db.query(
      `select * from visits v where v.visitId=${id};`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}
