import {Router} from "express";
import { bookGetManager, bookPostManager } from "../managers/books.js";

const bookRoute = Router();

bookRoute.get("/", bookGetManager);

bookRoute.post("/", bookPostManager);

bookRoute.patch("/", (req, res) => {
	res.send("Requisição PATCH");
});

bookRoute.delete("/", (req, res) => {
	res.send("Requisição DELETE");
});

export default bookRoute;
