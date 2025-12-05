import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
    isDrawerOpen: boolean,
    isModalOpen: boolean,
    isConfettiVisible: boolean,
    imageSelected: string | null,
    alert: {
        type: 'success' | 'error',
        message: string,
        isVisible: boolean
    }
}

const initialState: UIState = {
    isDrawerOpen: true,
    isModalOpen: false,
    isConfettiVisible: false,
    imageSelected: null,
    alert: {
        type: 'error',
        message: '',
        isVisible: false
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {

        setIsDrawerStatus: (state, {payload}: PayloadAction<boolean>) => {
            state.isDrawerOpen = payload
        },

        setImageSelected: (state, {payload}: PayloadAction<string | null>) => {
            state.imageSelected = payload
        },

        setIsModalOpen: (state, {payload}: PayloadAction<boolean>) => {
            state.isModalOpen = payload
        },

        setIsConfettiVisible: (state, {payload}: PayloadAction<boolean>) => {
            state.isConfettiVisible = payload
        },

        setAlert: ( state, {payload}: PayloadAction<{type: 'success' | 'error', message: string, isVisible: boolean}>) => {
            state.alert.type = payload.type
            state.alert.message = payload.message
            state.alert.isVisible = payload.isVisible
        }

    }   
    
})

export const {
    setIsDrawerStatus,
    setImageSelected,
    setIsModalOpen,
    setIsConfettiVisible,
    setAlert,
} = uiSlice.actions