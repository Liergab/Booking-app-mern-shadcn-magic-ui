import express from 'express'
import * as controller from '../controller/hotels'
const searchRouter = express.Router()

searchRouter.get('/search', controller.search)


export default searchRouter