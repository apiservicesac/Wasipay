import { ProductEntity as Entity } from "@/shop/domain/entities"
import { ProductRepository as Repository } from "@/shop/domain/repositories"
import { UpdateEntityException } from "@/shared/exceptions"

export class UpdateImagesUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(product_id: string, formData : FormData): Promise<Entity> {        

        const entity: Entity | null = await this._repository.update_images(product_id, formData)

        if(entity === null) throw new UpdateEntityException()
        
        return entity
    }
}
