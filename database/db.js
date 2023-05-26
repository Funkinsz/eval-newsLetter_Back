const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mynews"
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Logged to database My News");
})

module.exports = connection