'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'author',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      webpage: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      deathDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthDate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      alias: {
        type: DataTypes.ARRAY(DataTypes.STRING(1000)),
        allowNull: true,
      },
    },
    {
      indexes: [
        {
          fields: ['name'],
        },
      ],
    },
  );
  Author.associate = function (models) {
    Author.hasMany(models['book_author']);
  };
  return Author;
};
