import {Router} from "express";
import { bookGetManager } from "../managers/books.js";

const bookRoute = Router();

bookRoute.get("/", bookGetManager);

bookRoute.post("/", (req, res) => {
	res.send("Requisição POST");
});

bookRoute.patch("/", (req, res) => {
	res.send("Requisição PATCH");
});

bookRoute.delete("/", (req, res) => {
	res.send("Requisição DELETE");
});

export default bookRoute;
