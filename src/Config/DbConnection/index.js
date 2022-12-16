const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()

module.exports.connectDb = async () => {
    mongoose.set('strictQuery',true)
    const connection = await mongoose.connect(`${process.env.MONGODBSRV}`)
    switch(connection.connection.readyState){
        case 0: console.log(`Connection to database failed`); break
        case 1: console.log(`Connection to databse successful`); break
        case 2: console.log('Server is trying to connect to database'); break
        case 3: console.log('Disconnecting from database'); break
    } 
    return connection
}
