// const express = require('express')
// const cors = require('cors')
// const app = express()

// // const bodyParser = require('body-parser')

// // //middlewares
// // app.use(bodyParser.json({limit:"50mb"}))
// // app.use(bodyParser.urlencoded({exteded:true,limit:"50mb"}))

// //cors
// app.use((req,res,next)=>{
//     req.headers("Access-Control-Allow-Origin","*")
//     req.headers("Access-Control-Allow-Headers","*");
//     next()
// })




// // routes 

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config()

const app = express()
const port = process.env.PORT || 3003

//middlewares
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`server running at ${port}`)
})  //this is just to see server is running

app.listen(port, (req, res) => {
    console.log(`Server listening at PORT ${port}`)
})