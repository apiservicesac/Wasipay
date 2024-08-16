import { ShopEntity as Entity } from "@/features/shop/domain/entities"
import { ShopRepository as Repository } from "@/features/shop/domain/repositories"
import { UpdateEntityException } from "@/shared/exceptions"

export class UpdateImageUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(shop_id: string, formData : FormData): Promise<Entity> {        

        const entity: Entity | null = await this._repository.update_image(shop_id, formData)

        if(entity === null) throw new UpdateEntityException()
        
        return entity
    }
}
