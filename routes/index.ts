import { Router } from "express";
import globalRouter from "./globals";
import bookRouter from "./books";

// Initialiastion du router Express
const router = Router();

// On lie le router "globals" au router principale
router.use(globalRouter);

// On lie le router spécial "book" au router principale
router.use('/books', bookRouter);

export default router;
