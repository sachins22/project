import  express  from "express";
const app = express()
import cookieParser from "cookie-parser";
import  Cors  from "cors";



app.use(Cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"))
app.use(cookieParser());









export { app }
