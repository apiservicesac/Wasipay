import { UserEntity as Entity, UserResponse } from "@/Auth/domain/entities"
import { UserRepository as Repository } from "@/Auth/domain/repositories"
import { AuthenticateException } from "@/shared/exceptions"

export class LoginUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(user_email: string, password: string): Promise<UserResponse<Entity>> {

        const user_response : UserResponse<Entity>  | null = await this._repository.login(user_email, password)

        if (!user_response) throw new AuthenticateException()

        return {
            user: user_response.user,
            access_token: user_response.access_token,
            refresh_token: user_response.refresh_token,
        }
    }
}
