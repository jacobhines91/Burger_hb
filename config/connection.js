// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  mysql.createConnection({
    host: "t89yihg12rw77y6f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "root",
    password: "zzo0iewgpq4nxgl9",
    database: "ulwht71tyuw31o22"
  });
};


// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
