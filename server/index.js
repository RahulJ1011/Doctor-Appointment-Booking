const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const {connection} = require('./config/db')
const authRoutes = require('./routes/Auth')
const appointRoutes = require('./routes/Appointment')
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))

app.use(express.json());
app.use("/api/auth",authRoutes)
app.use("/api/appoint",appointRoutes)

const PORT = 4000;
connection()
app.listen(PORT,()=>
{
    console.log(`Server is listening on ${PORT}`)
})