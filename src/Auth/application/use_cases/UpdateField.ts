import { UserEntity as Entity } from "@/Auth/domain/entities"
import { UserRepository as Repository } from "@/Auth/domain/repositories"
import { UpdateEntityException } from "@/shared/exceptions"

export class UpdateFieldUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id : string, field : string, value : any, accessToken: string): Promise<Entity> {
       
        const entity: Entity | null = await this._repository.update_field(id, field, value, accessToken)

        if(entity === null) throw new UpdateEntityException()
        
        return entity
    }
}
