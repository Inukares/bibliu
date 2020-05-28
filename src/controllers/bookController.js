const {
  book: Book,
  author: Author,
  book_author: BookAuthor,
} = require("../../db/models/index");

const saveBook = async (book) => {
  let response;

  try {
    response = await Book.create(book, {
      include: {
        model: BookAuthor,
        include: [Author],
      },
    });
  } catch (error) {
    console.log("error during book creation", error);
  }

  return response;
};

module.exports = saveBook;
