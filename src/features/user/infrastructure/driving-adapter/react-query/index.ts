import { ImplementationAxios as Axios } from "@/features/user/infrastructure/implementation/axios";
import { UserEntity } from '@/features/user/domain/entities';
import { GetByIdUseCase, LoginUseCase } from '@/features/user/application/use_cases';
import { TokenService } from '@/shared/services/token';


class QueryUser {
    private repository: Axios;
    private tokenService: TokenService;

    constructor() {
        this.repository = new Axios()
        this.tokenService = new TokenService()
    }

    async init(setStateUser: (user: UserEntity) => void): Promise<void> {
        const userUseCase = new GetByIdUseCase(this.repository) 
        const user = await userUseCase.run((await this.tokenService.checkTokens()).decoded.id, this.tokenService.getAccessToken()!)
        setStateUser(user as UserEntity)
    }

    async login(email: string, password: string): Promise<void> {
        const userUseCase = new LoginUseCase(this.repository)   
        const response = await userUseCase.run(email!, password!)
        this.tokenService.setTokens(response?.access_token!, response?.refresh_token!)               
    }

    logout(navigate: (route: string) => void): void {
        this.tokenService.removeTokens()
        navigate('/logout')
    }
    
}

export {
    QueryUser
};
