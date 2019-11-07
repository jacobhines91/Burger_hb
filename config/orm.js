// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function (tb, cb) {
    var queryString = "SELECT * FROM ?? ";
    connection.query(queryString, [tb], function (err, result) {
      if (err)
        throw err;
      console.table(result);
      cb(result);
    })
  },
  insertOne: function (tb, cols, vals, cb) {
    var queryString = "INSERT INTO " + tb;

    queryString += " (";
    queryString += cols;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += vals;
    queryString += ") ";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      console.table(result);
      cb(result);
    })
  },
  // An example of objColVals would be {name: panther, sleepy: true}


  updateOne: function (tb, colToUpdate, col, val, valToUpdate, cb) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [tb, colToUpdate, col, val, valToUpdate], function (err, result) {
      if (err) throw err;

      console.table(result);
      cb(result);
    })
  }

};

//   update: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },

//export
module.exports = orm;