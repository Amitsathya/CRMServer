import Employee from '../models/EmployeeModel.js'
import { QueryTypes } from 'sequelize'
import db from '../config/Database.js'

export const getEmployees = async (req, res, next) => {
  try {
    const response = await Employee.findAll()
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const createEmployee = async (req, res, next) => {
  try {
    console.log(req.body)
    await Employee.create(req.body).then((result) =>
      res.status(201).json({ data: result.employeeId, msg: 'Employee Created' })
    )
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const updateEmployee = async (req, res, next) => {
  try {
    await Employee.update(req.body, {
      where: {
        employeeId: req.body.employeeId,
      },
    })
    res.status(200).json({ msg: 'Employee Updated' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const deleteEmployee = async (req, res, next) => {
  try {
    await Employee.destroy({
      where: {
        employeeId: req.body.employeeId,
      },
    })
    res.status(200).json({ msg: 'Employee Deleted' })
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}

export const getEmployeeById = async (req, res, next) => {
  try {
    const id = req.params.id
    const response = await db.query(
      `select * from employees c where c.employeeId=${id};`,
      { type: QueryTypes.SELECT }
    )
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    next(error.message)
  }
}
