import { ProductEntity as Entity, ProductItemEntity } from '@/shop/domain/entities'
import { ProductRepository as Repository } from '@/shop/domain/repositories'

export class GetAllUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(shop_id: string): Promise<ProductItemEntity[] | null > {
        const entities: Entity[] | null = await this._repository.getAll(shop_id)
        const new_list_product = entities!.map((product : Entity) => {
            const product_item_entity : ProductItemEntity = {
              product: product,
              quantity: 0,
              total_price: 0,
              in_cart: false
            }
            return product_item_entity
        })
        return new_list_product
    }
}
