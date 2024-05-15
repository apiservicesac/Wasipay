import { ShopEntity as Entity } from '@/shop/domain/entities'
import { ShopRepository as Repository } from '@/shop/domain/repositories'

export class GetByIdUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(shop_id: string): Promise<Entity | null > {
        const entity: Entity | null = await this._repository.getById(shop_id)
        return entity
    }
}
