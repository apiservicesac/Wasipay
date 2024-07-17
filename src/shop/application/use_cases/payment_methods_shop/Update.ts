import { PaymentMethodShopEntity as Entity } from "@/shop/domain/entities"
import { PaymentMethodShopRepository as Repository } from "@/shop/domain/repositories"
import { UpdateEntityException } from "@/shared/exceptions"

export class UpdateUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id: string, formData: FormData): Promise<Entity> {
       
        const entity: Entity | null = await this._repository.update(id, formData)

        if(entity === null) throw new UpdateEntityException()
        
        return entity
    }
}
