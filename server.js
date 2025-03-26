
const express =require('express');

const dotenv = require("dotenv");
const cors = require("cors");
const connectDb =require('./config/db')
const userRouters =require('./router/userRouter')

dotenv.config();
connectDb();



const app=express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRouters);



app.listen(5000,()=>{
    console.log('server is running')
})