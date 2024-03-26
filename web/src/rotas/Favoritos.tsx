import { useEffect, useState } from 'react';
import styled from 'styled-components';
import livroImg from '../images/livro.png';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px;
`

interface FavoritosProps {
  id: string | number;
  nome: string
}

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favs = await getFavoritos()
    setFavoritos(favs)
  }

  async function deletarFavorito(id: String | Number) {
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Livro id ${id} apagado com sucesso!`)
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map((favorito: FavoritosProps) => (
              <Resultado onClick={() => deletarFavorito(favorito.id)}>
                <p>{favorito.nome}</p>
                <img src={livroImg} />
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  )
}

export default Favoritos