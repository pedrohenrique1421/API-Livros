import {getBooks, getBookById, postBook} from "../services/booksServices.js";

// Requisicoes tipo GET -----------------
const bookGetManagerDefault = (req, res) => {
	try {
		res.send(getBooks());
	} catch (e) {
		res.status(500);
		res.send("error on bookGetManagerDefault ", e.message);
	}
};

const bookGetManagerById = (req, res) => {
	try {
		res.send(getBookById(req.params.id));
		res.status(200);
	} catch (e) {
		res.status(500);
		res.send("error on bookGetManagerById ");
	}
};

// Requisicoes tipo POST -----------------
const bookPostManager = (req, res) => {
	try {
		postBook(req.body);
		res.status(201);
		res.send("Book created");
	} catch (e) {
		res.status(500);
		res.send(e.message);
	}
};

export {bookGetManagerDefault, bookPostManager, bookGetManagerById};
