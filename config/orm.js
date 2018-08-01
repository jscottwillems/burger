require("./connection");

module.exports = function (app) {
    function selectAll() {
        connection.query("SELECT * FROM burgers", function (req, res) {
            if (err) throw err;
            console.log(res)
        })
    }

    function insertOne() {
        connection.query("", function (req, res) {
            if (err) throw err;
            console.log(res)
        })
    }

    function updateOne() {
        connection.query("", function (req, res) {
            if (err) throw err;
            console.log(res)
        })
    }
}