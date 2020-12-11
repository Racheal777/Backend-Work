const http = require('http')
const express = require('express')
const app = express()
app.use(express.json ())

const mongoose = require('mongoose')
const routes=require('./routes/auth')

require('dotenv') .config()



// const config ={
//     useNewUrlParser:true,
//     useUnifiedTopology: true

// }


mongoose.connect(process.env.MONGODB_URI, () => {
    console.log("Successfully connected to MongoDB");
})

.catch(error => {
    console.error("Some problem occured",error)
})



const Port = process.env.port
const server=http.createServer(app)

app.use(routes)

 server.listen (process.env.Port,()=>{
     console.log("server started")
 })

 