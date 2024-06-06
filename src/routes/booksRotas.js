import {Router} from "express";
import {
	bookGetManagerDefault,
	bookGetManagerById,
	bookPostManager,
} from "../managers/booksManager.js";

// Rotas do /books =====================
const bookRoute = Router();

// Rotas tipo GET ---------------------
bookRoute.get("/", bookGetManagerDefault);

bookRoute.get("/:id", bookGetManagerById);

// Rotas tipo POST -------------------
bookRoute.post("/", bookPostManager); //NAO FUNCIONA

// Rotas tipo PATCH
bookRoute.patch("/", (req, res) => {
	res.send("Requisição PATCH");
});

// Rotas tipo DELETE -------------------
bookRoute.delete("/", (req, res) => {
	res.send("Requisição DELETE");
});

export default bookRoute;
