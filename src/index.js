
import { connectDB } from "./DB/index.js"
import dotenv from "dotenv";
import { app } from "./app.js"

dotenv.config({
    path: "./env"
})

let port=8000


connectDB()
.then( 
app.listen(  port ,()=>{
  console.log( `app listen on port : ${port}`)
} )
)
.catch((error)=> {
    console.log("mongodb not port !!!", error);
    process.exit(1)
})



           