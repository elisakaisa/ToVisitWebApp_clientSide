import { configureStore } from '@reduxjs/toolkit'
import visitReducer from './reducers/visitReducer'

const store = configureStore({
    reducer: {
        visits: visitReducer
    }
})

export default store