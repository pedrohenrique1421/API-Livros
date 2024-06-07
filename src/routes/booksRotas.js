import {Router} from "express";
import {
	bookGetManager,
	bookPostManager,
	bookPatchManager,
	bookDeleteManager,
} from "../managers/booksManager.js";

// Rotas do /books =====================
const bookRoute = Router();

// Rotas tipo GET ---------------------
bookRoute.get("/", bookGetManager);

// Rotas tipo POST -------------------
bookRoute.post("/", bookPostManager); //NAO FUNCIONA

// Rotas tipo PATCH
bookRoute.patch("/", bookPatchManager);

// Rotas tipo DELETE -------------------
bookRoute.delete("/", bookDeleteManager);

export default bookRoute;
