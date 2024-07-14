import { TokenService } from "@/shared/services/token"
import { useNavigate } from "react-router-dom"

export const CommonHelper = () => {
    
    const navigate = useNavigate()

    const logoutSessionAuth = () => {
        const tokenService = new TokenService()
        tokenService.removeTokens()
        navigate('/logout')
    }

    return {
        logoutSessionAuth
    }

}