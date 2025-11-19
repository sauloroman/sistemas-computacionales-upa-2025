import { useNavigate } from "react-router-dom"

export const useNavigatePages = () => {

    const navigate = useNavigate()
    
    const onGoPage = ( page: string ) => {
        navigate(page)
    }

    return {
        onGoPage
    }

}