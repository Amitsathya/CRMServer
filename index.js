import express from 'express'
import cors from 'cors'
import CustomerRoute from './routes/CustomerRoute.js'
import EmployeeRoute from './routes/EmployeeRoute.js'
import ServiceRoute from './routes/ServiceRoute.js'
import ProductRoute from './routes/ProductRoute.js'
import FeedbackRoute from './routes/FeedbackRoute.js'
import InventoryRoute from './routes/InventoryRoute.js'
import VisitRoute from './routes/VisitRoute.js'
import {} from 'dotenv/config'
const app = express()
app.use(cors())

app.use(express.json())
app.use(CustomerRoute)
app.use(EmployeeRoute)
app.use(ProductRoute)
app.use(InventoryRoute)
app.use(FeedbackRoute)
app.use(ServiceRoute)
app.use(VisitRoute)

const PORT = process.env.PORT
app.use((error, req, res, next) => {
  console.log(error)
  res.status(500).json(error)
})
app.listen(PORT, console.log(`Server started on port ${PORT}`))
