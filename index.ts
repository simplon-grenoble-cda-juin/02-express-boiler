import Express from "express"; // PAS BON : { Express }
import router from "./routes";

// Initialisation du serveur Express
const app = Express();

// Déclaration du port de Express (3000)
const PORT = 3001;

// On lie le router à l'application Express
app.use("/", router);

// Démarrer le serveur Express
app.listen(PORT, () => {
  console.log(`Le serveur a démarré sur le port ${PORT}`);
});
