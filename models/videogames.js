var orm = require("../config/orm");

module.exports = function() {
  orm.selectAll("example_One", "example_Two", "exammple_Three");

  orm.insertOne("example_One", "example_Two", "exammple_Three");

  orm.updateOne("example_One", "example_Two", "exammple_Three");
};
