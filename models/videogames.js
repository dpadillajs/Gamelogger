var orm = require("../config/orm");

var videogames = {
  selectAll: function(cb) {
    orm.selectAll("videogames", res => {
      cb(res);
    });
  },

  insertOne: function(colOne, colTwo, valOne, valTwo, cb) {
    orm.insertOne("videogames", colOne, colTwo, valOne, valTwo, res => {
      cb(res);
    });
  },

  updateOne: function(colOne, valOne, colTwo, valTwo, cb) {
    orm.updateOne("videogames", colOne, valOne, colTwo, valTwo, res => {
      cb(res);
    });
  },

  delete: function(column, value, cb) {
    orm.delete("videogames", column, value, res => {
      cb(res);
    });
  }
};

module.exports = videogames;
