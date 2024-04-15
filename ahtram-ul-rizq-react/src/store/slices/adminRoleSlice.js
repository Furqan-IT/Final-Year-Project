import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    roleValue: null,
};

// Check if there is a stored authentication token in local storage
const storedRoleValue = localStorage.getItem('role');
if (storedRoleValue) {
    initialState.roleValue = storedRoleValue;
}

export const adminRoleSlice = createSlice({
    name: 'adminRole',
    initialState,
    reducers: {
        setAdminRole: (state, action) => {
            const storedRole = localStorage.getItem('role');
            state.adminRole = action.payload || storedRole;
            state.roleValue = action.payload || storedRole;
            localStorage.setItem('role', action.payload);
        },
        removeAdminToken: (state) => {
            state.adminRole = null;
            localStorage.removeItem('role');
        },
    },
});

export const { setAdminRole, removeAdminToken } = adminRoleSlice.actions;

export default adminRoleSlice.reducer;
