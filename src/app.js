const express = require('express')
const app = express();
require('dotenv').config()
const cors = require('cors');
const { general } = require('./Helper Functions/Extractor/Extractor');
const {UploadRouter,RetriveRouter} = require('./Routes/Extractor');
const { connectDb } = require('./Config/DbConnection');

app.use(express.json());
app.use(cors({origin: "*"}))
app.use(express.urlencoded({ extended: true }));

app.use('/upload',UploadRouter)
app.use('/retrieve',RetriveRouter)


app.listen(process.env.PORT || 7000, () => {
    general.logs()
    connectDb()
})
