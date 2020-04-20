 const express=require('express')
 const app=express()
 const route=require('./router/router')
 const mongoose=require('mongoose')
 const config=require('./config/config')
 const bodyParser=require('body-parser')

 const PORT=4400

 mongoose.Promise=global.Promise
 mongoose.connect(config.DB,{useNewUrlParser:true}).then(mRes=>{
     console.log("Mongoose Connection Successful")
 },
 err=>{
      console.log("Mongoose connection Failed")
 })

 app.use(bodyParser.urlencoded({extended:true}))
 app.use(bodyParser.json())
 app.use('/',route)

 app.listen(PORT,()=>{
     console.log(`The Server is up and Running at ${PORT}`)
 })
