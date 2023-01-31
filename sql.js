const data = require("mysql")

const con = data.createConnection({
    host: "localhost",
    user: "root",
    password:"root",
    database: "google"

})

con.connect(function(err){
    if(err) console.log(err);

})
module.exports = con;