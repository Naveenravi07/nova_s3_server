class UploadResponse{
    constructor(status,message,response){
        this.status=status;
        this.message=message;
        this.response=response;
    }
}

module.exports=UploadResponse