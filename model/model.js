const mongoose=require('mongoose')
const Schema=mongoose.Schema


let Product= new Schema({
  
  title:{type:String,required:true},
  price:{type:Number,required:true},
  image:{type:URL,required:true},
  description:{type:String,required:true}
},
{
    collection:"Restapcollection"
})

module.exports= mongoose.model('Product',Product)