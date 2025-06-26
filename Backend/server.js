import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'

const app = express(); 
dotenv.config();

app.use(express.json());
app.use(cors({
  origin:true,
  methods:["GET","POST","PUT","DELETE"],
  credentials:true
 
}))

// userRouter
app.use('/api',userRouter)

// recipeRouter
app.use('/api',recipeRouter)

mongoose
.connect(process.env.MONGO_URI, {
  dbName: "recipes",
})
  .then(() => console.log("Connected to MongoDB successfully!..."))
  .catch((err) => console.log(err.message));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));


