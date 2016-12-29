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
        Post.hasMany(models.Comment, {
          through: Post_Comment
        })
        Post.hasMany(models.Tag, {
          through: Post_Tag
        })
        Post.belongsTo(models.prefecture,{
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
        Post.belongsTo(models.User,{
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Post;
};
