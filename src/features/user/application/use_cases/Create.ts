import { UserRepository as Repository } from "../../domain/repositories"
import { UserEntity as Entity } from "../../domain/entities"
import { CreateEntityException } from "@/shared/exceptions"

export class CreateUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(data: Entity, accessToken: string): Promise<Entity> {        

        const entity: Entity | null = await this._repository.save(data, accessToken)

        if(entity === null) throw new CreateEntityException()

        return entity

    }
}
