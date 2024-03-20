const { getTodosLivros, getLivroPorID, insereLivro, modificaLivro, apagaLivroPorID } = require("../servicos/livro")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorID(id)
            res.send(livro)

        } else {
            res.status(422)
            res.send('ID INVÁLIDO')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        if (req.body.nome) {
            insereLivro(livroNovo)
            res.status(201)
            res.send("Livro inserido com sucesso!")

        } else {
            res.status(422)
            res.send('O CAMPO "NOME" É OBRIGATÓRIO')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)
            res.send(`Item ${id} modificado com sucesso!`)

        } else {
            res.status(422)
            res.send('ID INVÁLIDO')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            apagaLivroPorID(id)
            res.send(`Livro ${id} apagado com sucesso!`)

        } else {
            res.status(422)
            res.send('ID INVÁLIDO')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}