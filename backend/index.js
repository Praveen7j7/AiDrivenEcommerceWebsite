import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
dotenv.config()
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

let port = process.env.PORT || 8000;

let app = express()

app.use(cors({
 origin:["http://localhost:5173" ,
   "http://localhost:5174",
   "https://ai-driven-ecommerce-website.vercel.app",
   "https://ai-driven-ecommerce-website-5pke.vercel.app"],
 credentials:true
}))
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)


app.get('/', (req, res) => {
  res.send('Backend is Running Continue with the Production!! ')
})

app.listen(port,()=>{
    console.log("Hello From Server")
    connectDb()
})


