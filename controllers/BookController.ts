import { Controller } from "../libs/Controller";

const books = [
  { id: 1, title: "1984" },
  { id: 2, title: "Le Meilleur des mondes" },
  { id: 3, title: "Fahrenheit 451" },
];

const bookComments = [
  { id: 1, bookId: 2, message: "Super j'ai trop aimé" },
  { id: 2, bookId: 2, message: "WTF j'ai rien compris" },
  { id: 3, bookId: 2, message: "Je préfère Express.js" },
  { id: 4, bookId: 1, message: "Super pour l'été" },
];

export class BookController extends Controller {
  public browseBooks() {
    const success = this.request.query.success;
    let flash = null;

    if (success === "true") {
      flash = {
        type: "success",
        message: "Le livre a bien été créé.",
      };
    } else if (success === "false") {
      flash = {
        type: "error",
        message: "Une erreur est survenue lors de la création du livre.",
      };
    }

    this.response.render("pages/books.ejs", {
      books,
      flash,
    });
  }

  public readBook() {
    // Je récupère l'ID du livre réclamé (dans l'URL)
    const requestedId = this.request.params.id;

    // J'exploite l'ID réclamé pour récupérer le livre dans "la base de données"
    const book = books.find((book) => {
      return book.id == parseInt(requestedId);
    });

    // Si je n'ai pas trouvé le livre
    if (!book) {
      this.response.send(`Le livre demandé n'existe pas`);
    }

    // Puisque j'ai trouvé le livre, j'utilise son ID pour identifier les commentaires correspondants au livre
    const comments = bookComments.filter((bookComment) => {
      return bookComment.bookId == book?.id;
    });

    // Si j'ai trouvé le livre
    this.response.render("pages/book.ejs", {
      book,
      comments,
    });
  }

  public editBook() {
    this.response.send("Bienvenue sur l'éditon d'un livre");
  }

  public createBook() {
    this.response.render("pages/bookCreate.ejs");
  }

  public addBook() {
    this.response.send("Bienvenue sur l'ajout d'un livre");
  }

  public deleteBook() {
    this.response.send("Bienvenue sur la suppression d'un livre");
  }
}
