import { NotFoundEntityException } from "@/shared/exceptions"
import { UserEntity as Entity } from "@/Auth/domain/entities"
import { UserRepository as Repository } from "@/Auth/domain/repositories"
import { CustomReponse } from "@/shared/entities/Response"

export class GetByIdUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id: string): Promise<Entity | null > {
        
        const reponse : CustomReponse<Entity| null> = await this._repository.getById(id)

        if(reponse === null) throw new NotFoundEntityException()

        return reponse.data as Entity
        
    }
}
