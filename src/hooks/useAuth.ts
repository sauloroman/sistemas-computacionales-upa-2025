import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store"
import { loginUser, logoutUser } from "../store/ui/auth.slice"

export const useAuth = () => {

    const dispatch = useDispatch<any>() 
    const { isLoading, status, user } = useSelector( (state: RootState) => state.auth)

    const onLoginUser = () => {
        dispatch(loginUser({
            id: '',
            codeQr: '',
            name: 'Nombre Graduado',
            quantityAdults: 0,
            quantityKids: 0
        }))
    }

    const onLogout = () => {
        dispatch(logoutUser())
    }

    return {
        isLoading,
        status,
        user,

        onLoginUser,
        onLogout
    }
}