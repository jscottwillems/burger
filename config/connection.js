module.exports = function(app) {
    var mysql = require("mysql");

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "seinfeld_db"
    });

    connection.connect(function (err) {
        if (err) {
            console.log("error connecting: " + err.stack);
            rerturn;
        }
        console.log("connected as id " + connection.threadId);
    });
}