const express = require('express');
const { ImageUploadController } = require('../Controllers/Uploads/Uploads.controller');
const UploadRouter = express.Router();

UploadRouter.post('/image',ImageUploadController)

module.exports = UploadRouter