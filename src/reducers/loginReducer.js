import { createSlice } from '@reduxjs/toolkit'

import loginService from '../services/loginService'
import { setNotification } from './notificationReducer'

const initialState = {
    id: null,
    token: null,
    username: null
}

let token = null
const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loginUser(state, action) {
            return action.payload
        },
        logoutUser(state, action) {
            return initialState
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions

// login from user action
export const loginAction = ({ username, password}) => {
    return async dispatch => {
        try {
            const user = await loginService.login({
                username,
                password,
            })

            // save user  token to local storage
            window.localStorage.setItem(
                'loggedBlogAppUser',
                JSON.stringify(user)
            )
            setToken(user.token)

            dispatch(loginUser((user)))
            //dispatch(setNotification(`Successfully logged in as ${user.name}!`, 5))
        } catch (exception) {
            dispatch(setNotification('Wrong credentials', 5))
        
        }
    }
}

// login from saved state
export const loginActionWindow = (user) => {
    return async dispatch => {

            window.localStorage.setItem(
                'loggedBlogAppUser',
                JSON.stringify(user)
            )
            setToken(user.token)

            dispatch(loginUser((user)))
    }
}
  

export const logoutAction = () => {
    return async dispatch => {
        window.localStorage.removeItem('loggedBlogAppUser')
        setToken(null)
        dispatch(logoutUser())
    }
}


export default userSlice.reducer