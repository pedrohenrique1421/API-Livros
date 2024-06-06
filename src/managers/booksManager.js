import {
	getBooks,
	getBookById,
	postBook,
	patchBook,
} from "../services/booksServices.js";

// Requisicoes tipo GET -----------------
const bookGetManagerDefault = (req, res) => {
	try {
		if (!getBooks()) {
			res.send("The DB is empty, :/");
			res.status(204); // No content
		} else {
			res.send(getBooks());
		}
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
		const returnOfPosting = postBook(req.body);
		if (returnOfPosting.status) {
			res.status(201);
			res.send("Item has created on th DB");
		} else {
			res.status(400);
			res.send(`Error on creating: ${returnOfPosting.message}`);
		}
	} catch (e) {
		res.status(500);
		res.send(e.message);
	}
};

// Requisicoes tipo PATCH -----------------

const bookPatchManager = (req, res) => {
	try {
		const returnOfPatching = patchBook(req.body, req.params.id);
		if (returnOfPatching) {
			res.send("Atributes has changed");
		} else {
			res.status(400);
			res.send(`Error on modifing: id dont finded`);
		}
	} catch (e) {
		res.status(500);
		res.send(e.message);
	}
};

export {
	bookGetManagerDefault,
	bookPostManager,
	bookGetManagerById,
	bookPatchManager,
};
