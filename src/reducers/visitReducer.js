import { createSlice } from '@reduxjs/toolkit'
import visitService from '../services/visitService'


const visitSlice = createSlice({
    name: 'visits',
    initialState: [],
    reducers: {
        setVisits(state, action) {
            return action.payload
        }
    }
})

export const { setVisits } = visitSlice.actions

export const initializeVisits = content => {
    return async dispatch => {
        const visits = await visitService.getAll()
        dispatch(setVisits(visits))
    }
}

export default visitSlice.reducer