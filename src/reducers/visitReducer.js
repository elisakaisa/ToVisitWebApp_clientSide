import { createSlice } from '@reduxjs/toolkit'
import visitService from '../services/visitService'
import { setNotification } from './notificationReducer'


const visitSlice = createSlice({
    name: 'visits',
    initialState: [],
    reducers: {
        setVisits(state, action) {
            return action.payload
        },
        setOne(state, action) {
            return action.payload
        },
        addNew(state, action) {
            state.push(action.payload)
        },
        update(state, action) {
            const updatedVisit = action.payload
            const { id } = updatedVisit
            return state.map((visit) =>
            visit.id !== id ? visit : updatedVisit
          )
        },
        removeOne(state, action) {
            return state.filter(visit => (visit.id !== action.payload))
        },
    }
})

export const { setVisits, setOne, addNew, update, removeOne } = visitSlice.actions

export const initializeVisits = content => {
    return async dispatch => {
        const visits = await visitService.getAll()
        dispatch(setVisits(visits))
    }
}

export const getOneVisit = visit => {
    return async dispatch => {
        const visit = await visitService.getOne(visit)
        dispatch(setOne(visit))
    }
}

export const createVisit = content => {
    return async dispatch => {
        try {
            const newVisit = await visitService.create(content)
            dispatch(addNew(newVisit))
            dispatch(setNotification(`Successfully added ${newVisit.what}`, 'success', 5))
        } catch (exception) {
            dispatch(setNotification('Something went wrong', 'error', 5))
        }
    }
}

export const updateVisit = visit => {
    return async dispatch => {
        try {
            const updatedVisit = await visitService.updateVisit(visit)
            dispatch(update(updatedVisit))
            dispatch(setNotification('Visit updated', 'success', 5))
        } catch (exception) {
            dispatch(setNotification('Something went wrong', 'error', 5))
        }
    }
}

export const deleteVisit = (id) => {
    return async dispatch => {
        try {
            const response = await visitService.removeVisit(id)
            dispatch(removeOne(id))
            dispatch(setNotification('Visit successfully removed', 'success', 5))
        } catch (exception) {
            dispatch(setNotification('Something went wrong', 'error', 5))
        }
    }
}

export default visitSlice.reducer