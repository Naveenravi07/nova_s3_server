const fs = require('fs');
const path = require('path');
const { imagefolder,publicfolder } = require('../../Constants/paths');
const { imageLogModel } = require('../../Models/Images/Imagelog.model');

const RetriveImageFromServer = (query) => {
try{
    return new Promise(async(resolve,reject)=>{
        if(!fs.existsSync(path.join(imagefolder,"\\",query.collection))) reject({message:'Collection Does Not Exist'});
        if(fs.existsSync(path.join(imagefolder,"\\",query.collection,"\\",query.url))){
        let imglog=await imageLogModel.find({userid:query.userid})
        imglog= imglog.find((log)=>log.filename==query.url)
        if(imglog==null||imglog==undefined) return reject({message:"Access Denied"})
        if(imglog.filename!==query.url) reject({message:'Access Denied'})
        resolve(fs.readFileSync(path.join(imagefolder,"\\",query.collection,"\\",query.url)))
        } else reject({message:"Item with the specified url doesnt exist"});
        })
}catch(err){throw {message:"An Unknown Error Occured"}}
}

module.exports ={RetriveImageFromServer}