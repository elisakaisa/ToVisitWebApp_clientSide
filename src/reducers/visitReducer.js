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
        appendVisit(state, action) {
            state.push(action.payload)
        },
        replaceVisit(state, action) {
            console.log('reducer -> action.payload', action.payload)
            const updatedVisit = action.payload
            const { id } = updatedVisit
            return state.map((visit) =>
            visit.id !== id ? visit : updatedVisit
          )
        },
    }
})

export const { setVisits, appendVisit, replaceVisit } = visitSlice.actions

export const initializeVisits = content => {
    return async dispatch => {
        const visits = await visitService.getAll()
        dispatch(setVisits(visits))
    }
}

export const createVisit = content => {
    return async dispatch => {
        try {
            const newVisit = await visitService.create(content)
            dispatch(appendVisit(newVisit))
            dispatch(setNotification(`Successfully added ${newVisit.what}`, 'success', 5))
        } catch (exception) {
            dispatch(setNotification('Something went wrong', 'error', 5))
        }
      
    }
}

export const updateVisit = visit => {
    return async dispatch => {
      const updatedVisit = await visitService.updateVisit(visit)
      dispatch(replaceVisit(updatedVisit))
      dispatch(setNotification('Visit updated', 'success', 5))
    }
  }

export default visitSlice.reducer