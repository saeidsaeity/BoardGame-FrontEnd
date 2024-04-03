import axios from 'axios'

const backEndApi = axios.create({
    baseURL: 'https://gameboardbackend.onrender.com'
})

export const getTile = (tileType) => {
    return backEndApi.get(`/api/tiles/${tileType}`)
    .then((response) => {
        return response.data
    })
}