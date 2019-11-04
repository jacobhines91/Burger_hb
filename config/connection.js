// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  mysql.createConnection({
    host: "ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "yxq9rhvxd3fqi33s",
    password: "xfkh43yucyvb64sc",
    database: "tjuzzjkl8yj6s8wd"
  });
};


// Make connection.
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
