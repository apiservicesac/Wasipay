import { ProductRepository as Repository } from '@/features/product/domain/repositories'
import { ProductResponse } from '../../domain/repositories/Response'

export class GetAllUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(shop_id: string, page: number, sortby: string, sortorder: string, search: string): Promise<ProductResponse | null > {
        console.log(shop_id, page)
        const entities: ProductResponse | null = await this._repository.getAll(shop_id, page, sortby, sortorder, search)
        return entities
    }
}
