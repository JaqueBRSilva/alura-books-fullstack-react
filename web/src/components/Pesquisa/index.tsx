import { useEffect, useState } from "react"
import styled from "styled-components"
import { postFavorito } from "../../servicos/favoritos"
import { getLivros } from "../../servicos/livros"
import Input from "../Input"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

interface LivroProps {
    id: String | Number;
    src: string;
    nome: string;
}

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])

    async function fetchLivros() {
        const booksAPI = await getLivros()
        setLivros(booksAPI)
    }

    async function insertFavorito(id: String | Number) {
        await postFavorito(id)
        alert(`Livro de id ${id} inserido com sucesso!`)
    }

    useEffect(() => {
        fetchLivros()
    }, [])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar ?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>

            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa: [] | any = livros.filter((livro: LivroProps) => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />

            {
                livrosPesquisados.map((livro: LivroProps) => (
                    <Resultado onClick={() => insertFavorito(livro.id)}>
                        <img src={livro.src} />
                        <p>{livro.nome}</p>
                    </Resultado>
                ))
            }

        </PesquisaContainer>
    )
}

export default Pesquisa