import Book from "../models/books.js"


export const listBooks = async () => {
    const allSBooks = await Book.find();
    return allSBooks;
};

export const addNewBook = async (newBook) => {
  try {
    const createdBook = await Showtime.create(newBook);
    return createdBook._id;
  } catch (error) {
    if ((error.code = 11000)) {
      throw new Error("Duplicate Error");
    }
  }
};

export const updateBook = async (id, newBookData) => {
  const response = await Book.findByIdAndUpdate(id, newShowtimeData, {
    new: true,
  });
  return response;
};

export const findAllBooksByGenre = async (genre) => {
  const books = await Book.find({ genre });
  return books;
};

export const findOneBookByTitle = async (title) => {
  const book = await Book.findOne({ bookTitle: title });
  return book;
};

export const findBookById = async (id) => {
  const book = await Book.findById(id);
  return book;
};

export const deleteBook = async (id) => {
    const response = await Showtime.findByIdAndDelete(id);
    return response;
};