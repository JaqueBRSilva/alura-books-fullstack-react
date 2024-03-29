import { useEffect, useState } from "react"
import styled from "styled-components"
import COVER_SRC from '../../images/alura-logo-280x280.png'
import MagnifyingGlass from '../../images/magnifying-glass.svg'
import { postFavorito } from "../../servicos/favoritos"
import { getLivros } from "../../servicos/livros"
import Input from "../Input"
import ResultadoContainer from "../ResultadoContainer"

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

const BookCover = styled.img``

const BookName = styled.p`
    font-size: 1.2rem;
`
const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3.5rem;
`

const SearchButton = styled.button`
    background-color: transparent;
    position: relative;
    right: 4rem;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border-color: transparent;
`

const MagnifyingGlassIcon = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    
    &:hover {
        filter: invert(22%) sepia(19%) saturate(2569%) hue-rotate(167deg) brightness(97%) contrast(88%);
    }
`

interface LivroProps {
    id: string;
    img_src: string;
    nome: string;
}

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [livros, setLivros] = useState([])
    const [searchTxt, setSearchTxt] = useState('')

    async function fetchLivros() {
        const booksAPI = await getLivros()
        setLivros(booksAPI)
    }

    async function insertFavorito(id: string) {
        await postFavorito(id)
        alert(`Livro de id ${id} inserido com sucesso!`)
    }

    function searchContent(txt: string) {
        if (txt.length == 0 || null) {
            alert('Digite algum texto para buscar o livro')
        } else {
            const resultadoPesquisa: [] | any = livros.filter((livro: LivroProps) => livro.nome.toLowerCase().includes((txt.toLowerCase())))
            setLivrosPesquisados(resultadoPesquisa)
        }
    }

    useEffect(() => {
        fetchLivros()
    }, [])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar ?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>

            <SearchContainer>
                <Input
                    placeholder="Escreva sua próxima leitura"
                    value={searchTxt}
                    onChange={evento => setSearchTxt(evento.target.value)}
                    enterKeyHint={"search"}
                />

                <SearchButton onClick={() => searchContent(searchTxt)}>
                    <MagnifyingGlassIcon src={MagnifyingGlass} />
                </SearchButton>
            </SearchContainer>

            <ResultadoContainer>
                {
                    livrosPesquisados.map((livro: LivroProps) => (
                        <Resultado id={livro.id}
                            onClick={() => insertFavorito(livro.id)}
                        >
                            <BookCover src={livro.img_src || COVER_SRC} alt={livro.nome} />
                            <BookName>{livro.nome}</BookName>
                        </Resultado>
                    ))
                }
            </ResultadoContainer>

        </PesquisaContainer>
    )
}

export default Pesquisa