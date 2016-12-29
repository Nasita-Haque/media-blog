"use strict";

module.exports = function(sequelize, DataTypes) {
  var Prefecture = sequelize.define("Prefecture", {
    prefecture: {
      type: DataTypes.TEXT, 
      required: true
    },
  }, {
    classMethods: {
      associate: function(models) {
        Prefecture.hasMany(models.Post);
      }
    }
  });
  return Prefecture;
};
