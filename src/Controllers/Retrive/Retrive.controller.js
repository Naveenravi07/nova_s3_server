const { RetriveError } = require("../../Classes/Errors/Retrive.Error");
const { RetriveImageFromServer } = require("./Retrive.helper")

const RetriveImageController = async (req, res) => {
await RetriveImageFromServer(req.query)
.then((image)=>{res.writeHead(200, {'Content-Type': 'image/gif' });res.end(image, 'binary');})
.catch((fserr)=>{console.log(fserr);let response= new RetriveError(400,fserr.message,null);res.status(400).send(response)})
}

module.exports = {RetriveImageController}