import { Router } from "express";
import { BookController } from "../controllers/BookController";

// Initialiastion du bookRouter Express
const bookRouter = Router();

// Browse
bookRouter.get("/", (request, response) => {
  const controller = new BookController(request, response);
  controller.browseBooks();
});

// Add GET
bookRouter.get("/add", (request, response) => {
  const controller = new BookController(request, response);
  controller.createBook();
});

// Add POST
bookRouter.post("/", (request, response) => {
  const controller = new BookController(request, response);
  controller.addBook();
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

// Delete
bookRouter.delete("/:id", (request, response) => {
  const controller = new BookController(request, response);
  controller.deleteBook();
});

export default bookRouter;
