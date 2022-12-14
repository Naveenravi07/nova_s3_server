const express = require('express')
const { RetriveImageController } = require('../Controllers/Retrive/Retrive.controller')
const ImageRouter = express.Router()

ImageRouter.get('/image',RetriveImageController)
// ImageRouter.get('/shnd',(req,res)=>res.ima)

module.exports= ImageRouter