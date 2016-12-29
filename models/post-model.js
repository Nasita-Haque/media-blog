"use strict";

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
  }, {
    classMethods: {
      associate: function(models) {
        Post.hasMany(models.Comment)
      }
    }
  });

  return Post;
};
