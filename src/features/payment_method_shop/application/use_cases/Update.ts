import { PaymentMethodShopEntity as Entity } from "@/features/payment_method_shop/domain/entities"
import { PaymentMethodShopRepository as Repository } from "@/features/payment_method_shop/domain/repositories"
import { UpdateEntityException } from "@/shared/exceptions"

export class UpdateUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id: string, data: Entity): Promise<Entity> {
       
        const entity: Entity | null = await this._repository.update(id, data)

        if(entity === null) throw new UpdateEntityException()
        
        return entity
    }
}
