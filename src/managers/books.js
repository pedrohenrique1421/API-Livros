import fs from "fs"

const bookGetManager = (req, res) => {
	try{
        const livros = fs.readFileSync("./src/db/db_shop.json")
        res.send(JSON.parse(livros));
    } catch(e) {
        res.status(500)
        res.send(e.message)
    }
}

const bookPostManager = (req, res) =>{
    try{
        console.log(req.body)
    } catch(e) {
        res.status(500)
        res.send(e.message)
    }
}

export {
    bookGetManager,
    bookPostManager
}