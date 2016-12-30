"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING(25), 
      required: true
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
        User.belongsToMany(models.Post, {through: "User_Post"})
      }
    }
  });
  return User;
};
