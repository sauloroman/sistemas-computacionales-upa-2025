import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store"
import { setAlert, setImageSelected, setIsConfettiVisible, setIsDrawerStatus, setIsModalOpen } from "../store/ui/ui.slice"

export const useUI = () => {
    const dispatch = useDispatch<any>()
    const { imageSelected, isModalOpen, isDrawerOpen, isConfettiVisible, alert } = useSelector((state: RootState) => state.ui)

    const onSetImage = ( image: string | null ) => {
        dispatch( setImageSelected(image))
    }

    const onSetImageVisibility = ( isVisible: boolean ) => {
        dispatch(setIsModalOpen(isVisible))
    }

    const onSetConfetti = ( isVisible: boolean ) => {
        dispatch(setIsConfettiVisible(isVisible))
    }

    const onSetMenuVisibility = ( isOpen: boolean ) => {
        dispatch(setIsDrawerStatus(isOpen))
    }

    const onOpenAlert = ( type: 'success' | 'error', message: string ) => {
        dispatch(setAlert({ message, type, isVisible: true }))
    }

    const onCloseAlert = () => {
        dispatch(setAlert({ type: 'error', isVisible: false, message: ''}))
    }

    return {
        alert,
        imageSelected,
        isDrawerOpen,
        isModalOpen,
        isConfettiVisible,

        onOpenAlert,
        onCloseAlert,
        onSetConfetti,
        onSetImage,
        onSetImageVisibility,
        onSetMenuVisibility
    }

}