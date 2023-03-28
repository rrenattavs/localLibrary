import mongoose from "../mongoose.js";

const bookSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true},
      author: {
        type: String,
        required: true
    },
      plot: String,
      published: Number,
      genre: String,
      available: Boolean
});

const Book = mongoose.model("book", bookSchema);

export default Book;