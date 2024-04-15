import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    authToken: null,
};

// Check if there is a stored authentication token in local storage
const storedAuthToken = localStorage.getItem('authtoken');
if (storedAuthToken) {
    initialState.authToken = storedAuthToken;
}

export const authTokenSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
            localStorage.setItem('authtoken', action.payload);
        },
        removeAuthToken: (state) => {
            state.authToken = null;
            localStorage.removeItem('authtoken');
            localStorage.removeItem('role');
        },
    },
});

export const { setAuthToken, removeAuthToken } = authTokenSlice.actions;

export default authTokenSlice.reducer;
