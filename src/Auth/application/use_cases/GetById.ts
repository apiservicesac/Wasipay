import { NotFoundEntityException } from "@/shared/exceptions"
import { UserEntity as Entity } from "@/Auth/domain/entities"
import { UserRepository as Repository } from "@/Auth/domain/repositories"

export class GetByIdUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id: string): Promise<Entity | null > {
        
        const entity: Entity | null = await this._repository.getById(id)

        if(entity === null) throw new NotFoundEntityException()

        return entity
        
    }
}
