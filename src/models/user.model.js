import mongoose, { Schema } from "mongoose";
import jwt from  "json-web-token";
import bcrypt from "bcrypt"



const userSchema= new mongoose.Schema({
    username:{
 type:String,
 required:true,
 uniqe:true,
 trim:true,
 index:true
      },
      email:{
 type:String,
 required:true,
 uniqe:true,
       },
       password:{
 type:String,
 required:true,
 uniqe:true,
 trim:true,
       },
       avatar:{                 //coludinary
 type:String,
 required:true,
 uniqe:true,
       },
       fullName:{
 type:String,
 uniqe:true,
 trim:true,
 index:true
       },
       coverImage:{
 type:String,
 uniqe:true,
 },
       fullName:{
 type:String,
 uniqe:true,
 trim:true,
 index:true
        },
        refreshToken:{
 type:String,
 default:""
        },
       watchHistory:{
 type:Schema.Types.ObjectId,
 ref:video
        }

},{timestamps:true})

// userSchema.pre("save", async function (next){ 
//       if(this.isModified("password")){
//             this.password = await bcrypt.hash(this.password,10) 
// }else{                                   
//         return  next()
//       }
//   })

//!here we use middleware hooke "Pre" which helps in encryption of password
userSchema.pre("save", async function (next){ //"save" is an event to save the password

    //this will check that if password is modified then only it will run this command otherwise not
    if(!this.isModified("password")) return next()

    this.password = await bcrypt.hash(this.password,10) // 10 says about the no. of time to cycle to encrypt
    next() 
})

//here to compare the user password and the datbase hash password for this "methods" are used

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

// jwt token is used for sign in 
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

//jwt token for refresh 

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}











 export const User = mongoose.model("User",userSchema)


// export {user}