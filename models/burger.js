// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");
  // The variables cols and vals are arrays.
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(vals, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], vals, function(res) {
           
        })
    },

    updateOne: function(valToUpdate, cb) {
        orm.updateOne("burgers", "devoured", true, "id", valToUpdate, function(res) {
           
        })
    }
}
// Export the database functions for the controller
module.exports = burger;