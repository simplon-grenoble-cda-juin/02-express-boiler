import { Controller } from "../libs/Controller";

export class GlobalsController extends Controller {
  public homepage() {
    const name = "Samantha";
    const isAuthenticated = true;

    this.response.render("pages/home", {
      name,
      isAuthenticated,
    });
  }

  // TODO : utiliser EJS pour la vue
  public contact() {
    this.response.send("Bienvenue sur la page de contact");
  }

  // TODO : utiliser EJS pour la vue
  public about() {
    this.response.send("Bienvenue sur la page à propos");
  }
}
