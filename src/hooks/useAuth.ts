import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../store"
import { loginUser, logoutUser, setIsLoading } from "../store/ui/auth.slice"
import { abrasaAPI } from "../api/abrasa.api"
import { setAlert } from "../store/ui/ui.slice"

export const useAuth = () => {

    const dispatch = useDispatch<any>() 
    const { isLoading, status, user } = useSelector( (state: RootState) => state.auth)

    const onLoginUser = async ( keyPass: string ) => {
        try {
            dispatch(setIsLoading(true))
            const { data: ticket } = await abrasaAPI.get(`api/tickets/keyPass/${keyPass}`)
            dispatch(loginUser(ticket))
        } catch( error: any) {
            const errorMessage = error.response.data.error
            dispatch(setAlert({ type: 'error', isVisible: true, message: errorMessage}))
        } finally {
            dispatch(setIsLoading(false))
        }
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