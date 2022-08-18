import axios from 'axios'
const baseUrl = 'http://localhost:3111/api/visits'

let token = null

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newObject) => {
    try {
        const config = {
            headers: { Authorization: token },
        }

        const response = await axios.post(baseUrl, newObject, config)
        return response.data
    } catch (error) {
        if (error.response.data.error) {
            return error.response.data
        } else if (error.response.data) {
            return { error: error.response.data } // proxy errors
        } else {
            return { error: 'Unknown error' }
        }
    }
}

export default { getAll, create, setToken }