import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import {login, register } from './controllers/UserController.js'
import { create, getAll, getOne } from './controllers/DiscountController.js'
import { createReview, getReviews } from './controllers/ReviewsController.js'
import { createCatalog, getAllCatalog, getOneCatalog } from './controllers/CatalogConroller.js'
import { createGift, getAllGift } from './controllers/GiftController.js'


mongoose
.connect(process.env.MONGODB_URL) 
.then(() => console.log('its okey!'))
.catch((err) => console.log('error', err))

const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', register)
app.post('/login', login)

app.post('/catalog', createCatalog)
app.get('/catalogs', getAllCatalog)
app.get('/catalog/:id', getOneCatalog)
app.get('/gifts', getAllGift)
app.post('/gift', createGift)

app.post('/discount', create)
app.get('/discounts', getAll)
app.get('/discount/:id', getOne)

app.post('/review', createReview)
app.get('/reviews', getReviews)



app.listen(process.env.PORT || 3002, console.log('its okey'))
