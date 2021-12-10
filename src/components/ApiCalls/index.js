import axios from "axios"

const url = 'https://api.chucknorris.io/jokes/'

export const getCategories = async () => {

    return axios.get(`${url}/categories`)
}

export const searchJokes = (query) => {

    return axios.get(`${url}/search?query=${query}`)

}

export const getJokeByCategory = (category) => {
    return axios.get(`${url}/random?category=${category}`)
}