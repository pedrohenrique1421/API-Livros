import express from "express";
// Rotas
import bookRoute from "./routes/booksRotas.js";

const app = express();
app.use(express.json());
const port = 3030;

// Ligando a API
app.listen(port, () => {
	console.log("- Server ON port: " + port + " -");
});

// Ligando as rotas
app.use("/books", bookRoute);
