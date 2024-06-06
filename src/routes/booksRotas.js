import {Router} from "express";
import {
	bookGetManagerDefault,
	bookGetManagerById,
	bookPostManager,
	bookPatchManager,
} from "../managers/booksManager.js";

// Rotas do /books =====================
const bookRoute = Router();

// Rotas tipo GET ---------------------
bookRoute.get("/", bookGetManagerDefault);

bookRoute.get("/:id", bookGetManagerById);

// Rotas tipo POST -------------------
bookRoute.post("/", bookPostManager); //NAO FUNCIONA

// Rotas tipo PATCH
bookRoute.patch("/:id", bookPatchManager);

// Rotas tipo DELETE -------------------
bookRoute.delete("/", (req, res) => {
	res.send("Requisição DELETE");
});

export default bookRoute;
