import { Router } from "express";
import { BookController } from "../controllers/BookController";

// Initialiastion du bookRouter Express
const bookRouter = Router();

// Browse
bookRouter.get("/books", (request, response) => {
  const controller = new BookController(request, response);
  controller.browseBooks();
});

// Read
bookRouter.get("/books/:id", (request, response) => {
  const controller = new BookController(request, response);
  controller.readBook();
});

// Edit
bookRouter.put("/books/:id", (request, response) => {
  const controller = new BookController(request, response);
  controller.editBook();
});

// Add
bookRouter.post("/books/", (request, response) => {
  const controller = new BookController(request, response);
  controller.addBook();
});

// Delete
bookRouter.delete("/books/:id", (request, response) => {
  const controller = new BookController(request, response);
  controller.deleteBook();
});

export default bookRouter;
