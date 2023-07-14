import express from 'express'
import { errorMiddleware } from './src/middlewares/errorMiddleware.js'
import userRouter from './src/routes/userRoutes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import categoryRouter from './src/routes/categoryRoutes.js'
/** 
 *  all express configurations
*/
const app = express()
app.use(cors());
app.use(cookieParser())
app.use(express.json())

/** 
 * setting up routs
 */
app.use('/api', userRouter)
app.use('/api', categoryRouter)


/**
 * Error handling middleware
 */
app.use(errorMiddleware)


export default app