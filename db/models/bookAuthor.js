'use strict';

module.exports = (sequelize, DataTypes) => {
  const BookAuthor = sequelize.define(
    'book_author',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
    },
    {},
  );
  BookAuthor.associate = function (models) {
    BookAuthor.belongsTo(models.book);
    BookAuthor.belongsTo(models.author);
  };
  return BookAuthor;
};
