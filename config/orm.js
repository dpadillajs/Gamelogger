var connection = require("./connection");

var orm = {
  selectAll: function(table, cb) {
    var queryStr = "SELECT * FROM " + table + ";";

    connection.query(queryStr, function(err, res) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  },

  insertOne: function(table, colOne, colTwo, valOne, valTwo, cb) {
    var queryStr = "INSERT INTO " + table;

    queryStr += " (";
    queryStr += colOne;
    queryStr += ", " + colTwo;
    queryStr += ") VALUES (";
    queryStr += '"' + valOne + '",';
    queryStr += ' "' + valTwo + '")';

    connection.query(queryStr, function(err, res) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  },

  updateOne: function(table, colOne, valOne, colTwo, valTwo, cb) {
    var queryStr = "UPDATE " + table;
    queryStr += " SET " + colOne;
    queryStr += " = " + valOne;
    queryStr += " WHERE " + colTwo;
    queryStr += " = " + valTwo;

    connection.query(queryStr, function(err, res) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  },

  delete: function(table, column, value, cb) {
    var queryStr = "DELETE FROM " + table;
    queryStr += " WHERE ";
    queryStr += column + " = ";
    queryStr += value;

    connection.query(queryStr, function(err, res) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  }
};

module.exports = orm;
