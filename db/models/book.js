'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'book',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      publisher: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      publicationDate: {
        type: DataTypes.STRING, // probably should be DATE, but for avoiding errors during development changed to STRING
        allowNull: true,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      subjects: {
        type: DataTypes.ARRAY(DataTypes.STRING(2000)),
        allowNull: true,
      },
      licenseRights: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      indexes: [
        {
          fields: ['title', 'publicationDate'],
        },
      ],
    },
  );
  Book.associate = function (models) {
    Book.hasMany(models['book_author']);
    // Book.belongsToMany(models.author, {
    //   through: {
    //     model: 'book_author',
    //     unique: false,
    //   },
    //   constraints: false,
    // })
  };
  return Book;
};
