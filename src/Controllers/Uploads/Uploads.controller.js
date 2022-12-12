const UploadResponse = require("../../Classes/Responses/upload.response.type")
const { uploadProfileHelper } = require("./upload.helper")


const ImageUploadController = async (req, res) => {
const response = await uploadProfileHelper(req,res)
.then((result)=>new UploadResponse(200,"Upload Success",result))
.catch((err)=>new UploadResponse(400,"Upload Failed",null))
res.status(response.status).send(response)
};

module.exports = { ImageUploadController }