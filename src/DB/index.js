import mongoose from "mongoose";
import { DB } from "../constants.js";


const connectDB = async()=>{   
try {
  const con = await  mongoose.connect(`${process.env.mongodb_uri}/${DB}`);
    console.log(`\n MOngodb connected !!`)
} catch (error) {
    console.log("mongodb not connected !!!",error);
    process.exit(1)
}
}



export { connectDB }