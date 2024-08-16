import { UserRepository as Repository } from "../../domain/repositories"
import { UserEntity as Entity } from "../../domain/entities"
import { UpdateEntityException } from "@/shared/exceptions"

export class UpdateUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id: string, data: Entity, accessToken: string): Promise<Entity> {
       
        const entity: Entity | null = await this._repository.update(id, data, accessToken)

        if(entity === null) throw new UpdateEntityException()
        
        return entity
    }
}
