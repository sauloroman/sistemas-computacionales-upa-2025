import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
    isDrawerOpen: boolean,
    isModalOpen: boolean,
    isConfettiVisible: boolean,
    imageSelected: string | null,
}

const initialState: UIState = {
    isDrawerOpen: true,
    isModalOpen: false,
    isConfettiVisible: false,
    imageSelected: null
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
        }

    }   
    
})

export const {
    setIsDrawerStatus,
    setImageSelected,
    setIsModalOpen,
    setIsConfettiVisible,
} = uiSlice.actions