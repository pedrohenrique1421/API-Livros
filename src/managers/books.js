const bookGetManager = (req, res) => {
	try{
        res.send("Requisição GET atuallizada");
    } catch(e) {
        res.status(500)
        res.send(e.message)
    }
}

export {
    bookGetManager
}