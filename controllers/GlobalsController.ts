import { Request, Response } from "express";

export class GlobalsController {
  protected request: Request;
  protected response: Response;

  constructor(request: Request, response: Response) {
    this.request = request;
    this.response = response;
  }

  public homepage() {
    this.response.send("Bienvenue sur la page d'accueil");
  }

  public contact() {
    this.response.send("Bienvenue sur la page de contact");
  }

  public about() {
    this.response.send("Bienvenue sur la page à propos");
  }
}
