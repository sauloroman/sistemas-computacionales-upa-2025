import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../interface/user.interface";
import { AuthStatus } from "../../interface/auth.interface";

interface AuthState {
    user: User | null,
    status: AuthStatus,
    isLoading: boolean,
}

const authState: AuthState = {
    isLoading: false,
    status: AuthStatus.unauthenticated,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        
        setIsLoading: ( state, {payload}: PayloadAction<boolean>) => {
            state.isLoading = payload
        },

        loginUser: ( state, {payload}: PayloadAction<User>) => {
            state.user = payload
            state.status = AuthStatus.authenticated
        },

        logoutUser: ( state ) => {
            state.user = null
            state.status = AuthStatus.unauthenticated
        }

    }
})

export const {
    loginUser,
    logoutUser
} = authSlice.actions