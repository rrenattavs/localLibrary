import express from "express";
import bookRouter from "./routes/bookroutes.js";
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/books", bookRouter);

app.get("/test", (req, res) => {
  res.send("test endpoint working");
});
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
