// Mutler
const multer = require('multer');
const path = require('path')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(path.join(__dirname, `../../public/Images/${req.query.collection}`))) {
            fs.mkdir(path.join(__dirname, `../../public/Images/${req.query.collection}`),{recursive:true},(err)=>err? err: null)
        }
        if (file.mimetype.includes('image')) {
            cb(null, path.join(__dirname, `../../public/Images/${req.query.collection}/`))
        } else cb({ name: "Data Type Error", message: "Please Provide A Valid Image", })
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage, })
const uploadimg = upload.single('Img')

const uploadProfileHelper = (req, res) => {
    return new Promise(async (resolve, reject) => {
        uploadimg(req, res, (multererr) => {
            if (multererr) reject(multererr)  
            req.file.path=req.file.path.split("s3bucket").pop()
            delete req.file.destination
            delete req.file.fieldname
            delete req.file.encoding
            resolve({status:req.file})
        })
    })
}
module.exports = { uploadProfileHelper }