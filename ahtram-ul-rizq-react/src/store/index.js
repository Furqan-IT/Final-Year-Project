import { configureStore } from '@reduxjs/toolkit'
import authTokenReducer from './slices/authTokenSlice'
import adminRoleReducer from './slices/adminRoleSlice'

export const store = configureStore({
    reducer: {
        authToken: authTokenReducer,
        adminRole: adminRoleReducer
    },
})