"use strict";

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    comment: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.Post);
      }
    }
  });
  return Comment;
};
