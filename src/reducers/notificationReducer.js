import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: null,
    type: null
}


const notificationSlice = createSlice({
    name:'notifications',
    initialState: initialState,
    reducers: {
        showNotification(state, action) {
            return action.payload
        },
        hideNotification(state, action) {
            return initialState
        }
    }
})

export const { showNotification, hideNotification } = notificationSlice.actions

let timeoutID = null

export const setNotification = (message, type, timeout) => {
    const notification = {
        message: message,
        type: type
    }

    return async (dispatch) => {
        dispatch(showNotification((notification)))

        // if timer already going: clear it
        if (timeoutID) {
            clearTimeout(timeoutID);
        }

        timeoutID = setTimeout(() => {
            dispatch(hideNotification())
        }, (timeout*1000))
    }
}
export default notificationSlice.reducer