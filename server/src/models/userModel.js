import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
/**
 * creating user schema
 */
const userSchema = new mongoose.Schema(
  {
    firstName:{
      type: String,
      required: true,
      maxLength:50,
      minLength:3,
    },
    lastName: {
      type: String,
      required: true,
      maxLength:50,
      minLength:3,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate:validator.isEmail
    },
    password:{
      type:String,
      required:true,
      minLength:8,
      select:false
  },
    following: {
      type: Array,
      default: [],
    },
    about:{
      type:String,
      default:''
    },
    avatar: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      default: "pending",
    },
    emailToken:{
      type:String,
  },
  emailTokenExpire:{
      type:Date,
  }
  },
  { timestamps: true }
);

userSchema.pre('save' ,async function(next){
  if(!this.isModified('password')){
      next()
  }
  this.password = await bcryptjs.hash(this.password, 10)
})


userSchema.methods.getJwtToken = function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET)
}

userSchema.methods.comparePassword = async function(enteredPassword){
  return await bcryptjs.compare(enteredPassword , this.password)
}
userSchema.methods.getEmailVerifyToken = function(){
  const resetToken = crypto.randomBytes(20).toString('hex')
  this.emailToken = crypto.createHash('sha256').update(resetToken).digest('hex')
  this.emailTokenExpire = Date.now()+15*60*1000
  return resetToken
}

/**
 * creating model
 */
const User = mongoose.model("User", userSchema); 

export default User;
