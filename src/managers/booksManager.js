import {
	getBooks,
	postBook,
	patchBook,
	deleteBook,
} from "../services/booksServices.js";

// Requisicoes tipo GET -----------------
// Fazer o GET que retorna todos ou por atributo
const bookGetManager = (req, res) => {
	try {
		const returnofGet = getBooks(req.query.params);
		if (typeof returnofGet === "array" || typeof returnofGet === "object") {
			if (returnofGet[0]) {
				res.send(getBooks(req.query.params));
			} else {
				throw returnofGet[1];
			}
		} else {
			res.send("Parametros mulltiplos");
			console.log(returnofGet);
		}
	} catch (e) {
		res.status(500);
		res.send(`error on bookGetManager ${e.message}`);
	}
};

// Requisicoes tipo POST -----------------
const bookPostManager = (req, res) => {
	try {
		const returnOfPosting = postBook(req.body);
		if (returnOfPosting.status) {
			res.status(201);
			res.send("Item has created on th DB");
		} else {
			throw new Error(`Error on creating: ${returnOfPosting.message}`);
		}
	} catch (e) {
		res.status(400);
		res.send(e.message);
	}
};

// Requisicoes tipo PATCH -----------------

const bookPatchManager = (req, res) => {
	// A fazer
	try {
		const returnOfPatching = patchBook(req.body, req.query.param);
		if (returnOfPatching) {
			res.send("Atributes has changed");
		} else {
			throw new Error("Error on modifing: id dont finded");
		}
	} catch (e) {
		res.status(400);
		res.send(e.message);
	}
};

// Requisicoes tipo DELETE -----------------

const bookDeleteManager = (req, res) => {
	try {
		const returnOfDelete = deleteBook(req.body);
		if (returnOfDelete) {
			res.send(returnOfDelete);
		} else {
			throw new Error("something its wrong");
		}
	} catch (e) {
		res.status(500);
		res.send(e.message);
	}
};

export {bookGetManager, bookPostManager, bookPatchManager, bookDeleteManager};
