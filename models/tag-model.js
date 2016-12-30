"use strict";

module.exports = function(sequelize, DataTypes) {
  var Tag = sequelize.define("Tag", {
    tag: {
      type: DataTypes.TEXT, 
      required: true
    },
  }, {
    classMethods: {
      associate: function(models) {
        Tag.belongsTo(models.Post);
      }
    }
  });
  return Tag;
};
