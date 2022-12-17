const mongoose=require('mongoose')
const { v4: uuidv4 } = require('uuid');
const Schema=mongoose.Schema

const ImageLogSchema = new Schema({
_id:{type:String, default:uuidv4},
filename:{type:String,required:true},
userid:{type:String,required:false},
orginalfilename:{type:String,required:false},
mimetype:{type:String,required:true},
path:{type:String,required:true},
size:{type:Number,required:true},
})
const imageLogModel=mongoose.model('imageLogs',ImageLogSchema)
module.exports={imageLogModel}