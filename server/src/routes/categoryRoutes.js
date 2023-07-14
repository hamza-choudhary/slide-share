import express from 'express'
import { getCategory, postCategory } from '../controllers/categoryController.js'

const categoryRouter = express.Router()

categoryRouter.route('/category').get(getCategory)


categoryRouter.route('/category/admin').post(postCategory)

export default categoryRouter