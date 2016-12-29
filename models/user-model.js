"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Post", {
    {username: {
      type: DataTypes.STRING(25), 
      required: true
      }
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      isEmail: true
    },
    password: {
      type:DataTypes.STRING(30),
      required: true
    },
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Post, {
          through: User_Post
        })
      }
    }
  });
  return User;
};
