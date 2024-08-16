import { ProductEntity as Entity } from "@/features/product/domain/entities"
import { ProductRepository as Repository } from "@/features/product/domain/repositories"
import { CreateEntityException } from "@/shared/exceptions"

export class CreateUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(shop_id: string, data: Entity): Promise<Entity> {
       
        const entity: Entity | null = await this._repository.save(shop_id, data)

        if(entity === null) throw new CreateEntityException()
        
        return entity
    }
}
