import axios from 'axios'

const favoritosAPI = axios.create({
    baseURL: 'http://localhost:8000/favoritos'
})

async function getFavoritos() {
    const response = await favoritosAPI.get('/')

    return response.data
}

async function postFavorito(id: Number | String) {
    await favoritosAPI.post(`/${id}`)
}

async function deleteFavorito(id: Number | String) {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}

