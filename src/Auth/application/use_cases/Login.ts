import { UserEntity as Entity, UserResponse } from "@/Auth/domain/entities"
import { UserRepository as Repository } from "@/Auth/domain/repositories"
import { CustomReponse } from "@/shared/entities/Response"
import { AuthenticateException } from "@/shared/exceptions"

export class LoginUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(email: string, password: string): Promise<CustomReponse<UserResponse<Entity>>> {

        const response : CustomReponse<UserResponse<Entity>>  | null = await this._repository.login(email, password)

        if (response?.code !== 200) throw new AuthenticateException()

        return response
    }
}
