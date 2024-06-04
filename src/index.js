import express from "express";
// Rotas
import bookRoute from "./routes/books.js";


const app = express();
const port = 3030;


// Ligando a API
app.listen(port, () => {
	console.log("- Server ON -");
});

// Ligando as rotas
app.use("/books", bookRoute);
