import express from "express";
import {
  addNewBook,
  deleteBook,
  findAllBooksByGenre,
  findOneBookByTitle,
  listBooks,
  updateBook,
} from "../controllers/controllers.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newShowtime = req.body;
  try {
    const id = await addNewBook(newBook);
    res.send(`Success, added ${newBook.title} - ${id}`);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allBooks = await listBooks();
    res.send(allBooks);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await findBookById();
    res.send(book);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const newBook = req.body;
  try {
    const updatedBook = await updateBook(id, newBook);
    res.send(updatedBook);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedBook = await deleteBook(id);
    res.send(deletedBook);
  } catch (error) {
    res.status(403).send(error.message);
  }
});

router.get("/genre/:genre", async (req, res) => {
  const genre = req.params.genre;
  try {
    const books = await findAllBooksByGenre(genre);
    res.send(books);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/title/:title", async (req, res) => {
  const title = req.params.title;
  try {
    const book = await findOneBookByTitle(title);
    res.send(book);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

export default router;
