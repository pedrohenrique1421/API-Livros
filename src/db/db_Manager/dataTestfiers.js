const dataTestfierOfNewBook = (bookObj) => {
	switch (true) {
		case bookObj.nome.length < 1:
			return {
				status: false,
				message: "name is pretty short",
			};
			break;
		case parseFloat(bookObj.preco) <= 0:
			return {
				status: false,
				message: "price is negative or 0",
			};
			break;
		case parseInt(bookObj.quantidade) < 1:
			return {
				status: false,
				message: "amount is 0 or less",
			};
			break;
		default:
			return {
				status: true,
				message: "everything is ok",
			};
			break;
	}
};

export {dataTestfierOfNewBook};
