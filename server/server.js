import app from './app.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

/**
 * handling uncaught Exception
 */
process.on('uncaughtException' , (err)=>{
    console.log(`error: ${err.message}`)
    console.log('shutting down the server due to uncaught Exception')
    process.exit(1)
})


/** 
 * dotenv path configuration at the top
*/
dotenv.config({path:'./config.env'})


/**
 * dotenv variables
 */
const PORT  = process.env.PORT
const DB_URl = process.env.DB_URl


/**
 * connecting with database
 */
mongoose.set('strictQuery', false)
mongoose.connect(DB_URl).then(()=>{
    console.log(`Database Connected Successfully`)
})



/** 
 * starting server
*/
app.listen(PORT , ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})


/**
 * handling unhanded error rejection
 */
process.on('unhandledRejection' , (err)=>{
    console.log(`error: ${err.message}`)
    console.log('shutting down the server due to unhandled error rejection')
    server.close(()=>{
        process.exit(1)
    })
})