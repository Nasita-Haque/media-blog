"use strict";

module.exports = function(sequelize, DataTypes) {
  var Vote = sequelize.define("Vote", {
    vote: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        Vote.belongsTo(models.Post);
      }
    }
  });
  return Vote;
};
