"use strict";

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING, 
      required: true
    },
    body: {
      type: DataTypes.TEXT, 
      required: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Post.belongsToMany(models.Comment, {
          through: "Post_Comment"
        })
        Post.belongsToMany(models.Tag, {
          through: "Post_Tag"
        })
        Post.belongsTo(models.Prefecture)
        Post.belongsTo(models.User)
      }
    }
  });
  return Post;
};
