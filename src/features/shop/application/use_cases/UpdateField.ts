import { ShopEntity as Entity } from "@/features/shop/domain/entities"
import { ShopRepository as Repository } from "@/features/shop/domain/repositories"
import { UpdateEntityException } from "@/shared/exceptions"

export class UpdateFieldUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(shop_id : string, field : string, value : any): Promise<Entity> {
       
        const entity: Entity | null = await this._repository.update_field(shop_id, field, value)

        if(entity === null) throw new UpdateEntityException()
        
        return entity
    }
}
