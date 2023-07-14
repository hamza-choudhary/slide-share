import { catchAsyncError } from '../middlewares/catchAsyncError.js'
import User from '../models/userModel.js'
import ErrorHandler from '../utils/errorHandler.js'
import sendToken from '../utils/jwtTokken.js'
import sendEmail from '../utils/sendEmail.js'
/**
 * register user using email
 */
export const registerUser = catchAsyncError(async(req,res,next)=>{
    const {firstName,lastName , email , password } = req.body
    const user = await User.create({
        firstName,lastName,email,password 
    })
    const restToken = await user.getEmailVerifyToken()
    const verifyEmail  = `${req.protocol}://${req.get('host')}/api/user/verify/${restToken}`
    const message = `your password reset token is :- \n\n ${verifyEmail} \n\n`
    await sendEmail({
        email:user.email,
        subject:'Verify your email',
        message
    })
    sendToken(user , 201 , res)
})
export const loginUser = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler(401 , "Please Enter valid Email & Password"))
    }
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched) {
        return next(new ErrorHandler(401 , "Please Enter valid Email & Password"))
    }

   
    sendToken(user, 200, res);
  });
  export const getUserDetails = catchAsyncError(async(req,res,next)=>{
    const user = await User.findById(req.user.id)
    res.status(200).json({
        success:true,
        user
    })
})

export const logout = catchAsyncError(async(req,res,next)=>{

    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:'logout successfully'
    })
})
