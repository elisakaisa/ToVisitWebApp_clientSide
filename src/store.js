import { configureStore } from '@reduxjs/toolkit'
import visitReducer from './reducers/visitReducer'
import notificationReducer from './reducers/notificationReducer'
import loginReducer from './reducers/loginReducer'

const store = configureStore({
    reducer: {
        visits: visitReducer,
        notifications: notificationReducer,
        login: loginReducer
    }
})

export default store