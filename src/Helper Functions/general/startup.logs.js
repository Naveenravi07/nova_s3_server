const figlet = require('figlet');

function logs() {
figlet("NOVA S3", (err, data) => {
console.log(data);
console.log(`Nova Admin Started In Port ${process.env.port ? process.env.port : 7000}`)
})}

module.exports = {logs}