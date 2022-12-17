const fs = require('fs');
const path = require('path');
const { imagefolder,publicfolder } = require('../../Constants/paths');

const RetriveImageFromServer = (query) => {
try{
    return new Promise(async(resolve,reject)=>{
        if(!fs.existsSync(path.join(imagefolder,"\\",query.collection))) reject({message:'Collection Does Not Exist'});
        if(fs.existsSync(path.join(publicfolder,"\\",query.url))){
        resolve(fs.readFileSync(path.join(publicfolder,"\\",query.url)))
        } else reject({message:"Item with the specified url doesnt exist"});
        })
}catch(err){throw {message:"An Unknown Error Occured"}}
}

module.exports ={RetriveImageFromServer}