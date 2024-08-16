import { AuthResponse } from "@/Auth/domain/entities"
import { UserRepository as Repository } from "@/Auth/domain/repositories"
import { AuthenticateException } from "@/shared/exceptions"

export class LoginUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(email: string, password: string): Promise<AuthResponse> {

        const response : AuthResponse  | null = await this._repository.login(email, password)!

        if(!response) throw new AuthenticateException()

        return response
    }
}
