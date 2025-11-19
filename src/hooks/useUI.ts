import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store"
import { setImageSelected, setIsConfettiVisible, setIsDrawerStatus, setIsModalOpen } from "../store/ui/ui.slice"

export const useUI = () => {
    const dispatch = useDispatch<any>()
    const { imageSelected, isModalOpen, isDrawerOpen, isConfettiVisible } = useSelector((state: RootState) => state.ui)

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

    return {
        imageSelected,
        isDrawerOpen,
        isModalOpen,
        isConfettiVisible,

        onSetConfetti,
        onSetImage,
        onSetImageVisibility,
        onSetMenuVisibility
    }

}