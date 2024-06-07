import fs from "fs";
import {dataTestfierOfNewBook} from "../db/db_Manager/dataTestfiers.js";

const db = JSON.parse(fs.readFileSync("./src/db/db_shop.json"));

const getBooks = (params) => {
	let paramsTrated = {};
	try {
		paramsTrated = JSON.parse(params);
		if (typeof paramsTrated !== "object") {
			throw new Error("Unexpected token");
		} else {
		}
	} catch (e) {
		if (params && e.message.includes("Unexpected token")) {
			const result = db.filter((objeto) =>
				Object.values(objeto).some(
					(valor) =>
						(typeof valor === "string" && valor.includes(params)) ||
						(typeof valor == "number" && valor == params)
				)
			);
			if (result.length > 0) {
				return result;
			} else {
				return [false, new Error("not results")];
			}
		} else {
			if (db.length == 0) {
				return [false, new Error("Db is empty")];
			} else {
				return db;
			}
		}
	}
	// const searchParams = Object.keys(paramsTrated);
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

const patchBook = (newAtributes, seachParam) => {
	// 	string A capa do harry
	// object { nome: 'A capa da invisibilidade', preco: 20.99 }
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

export {getBooks, postBook, patchBook, deleteBook};
