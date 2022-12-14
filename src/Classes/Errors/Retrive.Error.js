class RetriveError {
    constructor(status, message, error) {
        this.status = status;
        this.message = message;
        this.error = error
    }
}
module.exports={RetriveError}