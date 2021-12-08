'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hero = sequelize.define('Hero', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    city: DataTypes.STRING,
    powers: DataTypes.STRING,
    heroId: DataTypes.INTEGER
  }, {});
  Hero.associate = function(models) {
    Hero.belongsTo(models.User, {foreignKey: 'heroId', onDelete: 'cascade'})
    Hero.hasMany(models.Review, {foreignKey: 'vigilanteId', onDelete: 'cascade'})
  };
  return Hero;
};
