import fs from "fs";

const getBooks = () => {
	return JSON.parse(fs.readFileSync("./src/db/db_shop.json"));
};

const getBookById = (idOfbook) => {
	const db = JSON.parse(fs.readFileSync("./src/db/db_shop.json"));
	return db.filter((e) => e.id === parseInt(idOfbook));
};

const postBook = (newBook) => {
	const db = JSON.parse(fs.readFileSync("./src/db/db_shop.json"));
	const newList = [...db, newBook];
	fs.writeFileSync("./src/db/db_shop.json", JSON.stringify(newList));
};

export {getBooks, getBookById, postBook};
