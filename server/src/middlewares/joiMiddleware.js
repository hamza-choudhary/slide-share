import ErrorHandler from "../utils/errorHandler.js"
import { loginSchema, registrationSchema } from "../utils/joiSchema.js"

export const joiRegistration = (req,res,next)=>{
    const {error} = registrationSchema.validate(req.body)
    if(error){
        next(new ErrorHandler(400 , error.details[0].message))
    }
    next()
} 
export const joiLogin = (req,res,next)=>{
    const {error} = loginSchema.validate(req.body)
    if(error){
        next(new ErrorHandler(400 , error.details[0].message))
    }
    next()
}