import express from 'express'
import { getUserDetails, loginUser, logout, registerUser } from '../controllers/userController.js'
import { isAuthenticate } from '../middlewares/auth.js'
import { joiLogin, joiRegistration } from '../middlewares/joiMiddleware.js'

const userRouter = express.Router()


/**
 * registration router using email
 */
userRouter.route('/signup').post(joiRegistration,registerUser)
userRouter.route('/login').post(joiLogin,loginUser)


/**
 * autherized role only 
 */
userRouter.route('/me').get(isAuthenticate , getUserDetails)
userRouter.route('/logout').get(isAuthenticate,logout)

export default userRouter