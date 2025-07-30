import { Router } from "express";
import { BookController } from "../controllers/BookController";

// Initialiastion du bookRouter Express
const bookRouter = Router();

// Browse
bookRouter.get("/", (request, response) => {
  const controller = new BookController(request, response);
  controller.browseBooks();
});

// Read
bookRouter.get("/:id", (request, response) => {
  const controller = new BookController(request, response);
  controller.readBook();
});

// Edit
bookRouter.put("/:id", (request, response) => {
  const controller = new BookController(request, response);
  controller.editBook();
});

// Add
bookRouter.post("/", (request, response) => {
  const controller = new BookController(request, response);
  controller.addBook();
});

// Delete
bookRouter.delete("/:id", (request, response) => {
  const controller = new BookController(request, response);
  controller.deleteBook();
});

export default bookRouter;
