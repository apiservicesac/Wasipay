import { ImplementationAxios as AxiosUser } from "@/Auth/infrastructure/implementation/axios";

import { GetByIdUseCase as UserUseCaseGetById } from '@/Auth/application/use_cases'
import { TokenService } from "@/shared/services/token";
import { UseLocalContext } from "@/core/context/UseLocalContext";

export const UserProfileHelper = () => {
    const { setStateUser } = UseLocalContext(); // Assuming UseLocalContext is correctly imported

    // Loaded Data User Profile  
    const userRepository = new AxiosUser()
    const userUseCase = new UserUseCaseGetById(userRepository) 

    const tokenService = new TokenService()
    
    const getUserProfileData = async () => {
        const user = await userUseCase.run((await tokenService.checkTokens()).decoded.id, tokenService.getAccessToken()!)
        setStateUser(user)
    }    

    return {
        getUserProfileData
    }
}