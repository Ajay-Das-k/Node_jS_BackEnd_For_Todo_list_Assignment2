const dotenv=require('dotenv').config()
const PORT = process.env.PORT || 4000
const dbConnect=require("./config/dbConnect")
const morgan=require("morgan")
const cors = require("cors");

const express = require("express");
const app = express();



dbConnect.dbConnect();
app.use(morgan("dev"))
// added Cors
app.use(cors());




//for user routes
const userRoute = require('./routes/userRoute');
app.use("/",userRoute);



app.listen(PORT, 
  () => console.log(`Server is running At http://localhost:${PORT}`))
