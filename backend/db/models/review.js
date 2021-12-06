'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    vigilanteId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    answer: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId', onDelete: 'cascade'})
    Review.belongsTo(models.Hero, {foreignKey: 'vigilanteId', onDelete: 'cascade'})
  };
  return Review;
};
