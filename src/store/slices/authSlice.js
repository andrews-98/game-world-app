import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    username: null,
    id: null,
    signInStatus: false,
    showAlert: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.username = action.payload.username
            state.id = action.payload.id

        },
        removeUser(state, action) {
            state.email = null
            state.username = null
            state.id = null
            state.signInStatus = false
            state.showAlert = true
        },
        setSignInStatus(state, action) {
            state.signInStatus = action.payload
        },
        toggleAlert(state, action) {
            state.showAlert = action.payload
        }
    }
})

export const { setUser, removeUser, setSignInStatus, toggleAlert } = authSlice.actions;

export const authReducer = authSlice.reducer;