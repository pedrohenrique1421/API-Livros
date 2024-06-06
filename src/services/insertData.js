import fs from "fs";

// objeto{Nome do livro, preco, sinopse, quantidade}
const InsertData = (actualData, dataToInsert, show) => {
    //actualData = arquivo .json, dataToInsert = array, show = boolean;
	const lastId = actualData[actualData.length - 1].id;
	const objToInsert = {};
	objToInsert.id = lastId + 1;
	objToInsert.nome = dataToInsert[0];
	objToInsert.preco = dataToInsert[1];
	objToInsert.sinopse = dataToInsert[2];
	objToInsert.quantidade = dataToInsert[3];
	fs.writeFileSync(
		"./src/db.json",
		JSON.stringify([...actualData, objToInsert])
	);
	if (show) {
		console.log(JSON.parse(actualData));
	}
};



export {
    InsertData
}