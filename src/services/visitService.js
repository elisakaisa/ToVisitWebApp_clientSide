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

const getOne = async (visit) => {
    const response = await axios.get(`${baseUrl}/${visit.id}`)
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

const updateVisit = async (visit) => {
    try {
        const config = {
            headers: { Authorization: token },
        }

        const updatedVisit = {
            what: visit.what,
            where: visit.where,
            how: visit.how,
            category: visit.category,
            timeLength: visit.timeLength,
            timeOfYear: visit.timeOfYear,
            priceCategory: visit.priceCategory,
            easeOfOrganization: visit.easeOfOrganization,
            notes: visit.notes,
            done: visit.done,
            totalWalkingDistance: visit.totalWalkingDistance,
            actualPrice: visit.actualPrice,
        }
        const response = await axios.patch(`${baseUrl}/${visit.id}`, updatedVisit, config)
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

const removeVisit = async (id) => {
    try {
        /*const config = {
            headers: { Authorization: token },
        } */ //TODO: add token?

        //const response = await axios.delete(`${baseUrl}/${id}`, config)
        const response = await axios.delete(`${baseUrl}/${id}`)
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

export default { getAll, getOne, create, setToken, updateVisit, removeVisit }