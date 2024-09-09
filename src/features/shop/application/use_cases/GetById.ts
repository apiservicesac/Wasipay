import { ShopEntity as Entity } from '@/features/shop/domain/entities'
import { ShopRepository as Repository } from '@/features/shop/domain/repositories'

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
