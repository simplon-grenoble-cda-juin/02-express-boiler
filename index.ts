import Express from "express"; // PAS BON : { Express }
import router from "./routes";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Initialisation du serveur Express
const app = Express();

// Déclaration du port de Express (3000)
const PORT = 3000;

// Déterminer l'emplacement du fichier index.ts à la racine du projet
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);

// À l'aide du chemin du fichier index.ts, je détermine le chemin du dossier parent
const __dirname = path.dirname(__filename);

// J'indique à Express d'utiliser le moteur de template EJS
app.set("view engine", "ejs");

// J'indique à EJS où trouver le dossier contenant mes vues
app.set("views", path.join(__dirname, "views"));

// J'indique à Express d'utiliser le dossier public pour servir les fichiers statics (JS, CSS, images ...)
app.use(Express.static(path.join(__dirname, "public")))

// On lie le router à l'application Express
app.use("/", router);

// Démarrer le serveur Express
app.listen(PORT, () => {
  console.log(`Le serveur a démarré sur le port ${PORT}`);
});
