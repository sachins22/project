import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"






const videoSchema= new mongoose.Schema({
      videoFile:{                         // cloud
 type:String,
 required:true,

      },
      owner:{
 type:Schema.Types.ObjectId,
 required:true,

       },
       title:{
 type:String,
 required:true,
       },
       description:{                 
 type:String,
 required:true,
       },
       duration:{
 type:Number,
default:""
       },
       views:{
 type:Number,
 default:0
 },
       isPublished:{
 type:Boolean,

        },
    
},{timestamps:true})


videoSchema.plugin(mongooseAggregatePaginate) 



 export const Video = mongoose.model("video",userSchema)


// export {user}