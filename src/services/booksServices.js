import fs from "fs";
import {dataTestfierOfNewBook} from "../db/db_Manager/dataTestfiers.js";

const db = JSON.parse(fs.readFileSync("./src/db/db_shop.json"));

const getBooks = () => {
	if (db.length == 0) {
		return false;
	} else {
		return db;
	}
};

const getBookById = (idOfbook) => {
	return db.filter((e) => e.id === parseInt(idOfbook));
};

const postBook = (newBook) => {
	if (dataTestfierOfNewBook(newBook).status) {
		const newBookWTId = newBook;
		newBookWTId.id = db[db.length - 1] ? db[db.length - 1].id + 1 : 1;
		const newList = [...db, newBookWTId];
		fs.writeFileSync("./src/db/db_shop.json", JSON.stringify(newList));
	}
	return dataTestfierOfNewBook(newBook);
};

const patchBook = (newAtributes, id) => {
	const indexOfElement = db.findIndex((e) => e.id === parseInt(id));
	console.log(typeof indexOfElement, indexOfElement);
	if (indexOfElement >= 0) {
		db[indexOfElement] = {...db[indexOfElement], ...newAtributes};
		fs.writeFileSync("./src/db/db_shop.json", JSON.stringify(db));
		return true;
	} else {
		return false;
	}
};

const deleteBook = (p) => {
	if (Object.keys(p).length > 0) {
		const keys = Object.keys(p);
		let deletedElements = [];
		keys.map((key) => {
			const dbFiltered = db.filter((e) => e[key] !== p[key]);
			deletedElements = [
				...deletedElements,
				db.filter((e) => e[key] === p[key]),
			];
			console.log(db.filter((e) => e[key] !== p[key]));
			fs.writeFileSync(
				"./src/db/db_shop.json",
				JSON.stringify(dbFiltered)
			);
		});
		return deletedElements;
	} else {
		return false;
	}
};

export {getBooks, getBookById, postBook, patchBook, deleteBook};
