import jwt  from "jsonwebtoken";
import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import { catchAsyncError } from "./catchAsyncError.js";
export const isAuthenticate = catchAsyncError(async(req,res,next)=>{
    const {token} = req.cookies
    if(!token){
        return next(new ErrorHandler(401,'please login to access'))
    }
    const decodeData = jwt.verify(token,process.env.JWT_SECRET)

    req.user = await User.findById(decodeData.id)
    next()

    
})

export const authorizeRole = (...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            return next (new ErrorHandler(403 ,`role:${req.user.role} is not allowed to access`))
        }
        next()
    }
}