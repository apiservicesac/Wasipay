import { ProductEntity as Entity } from '@/features/product/domain/entities'
import { ProductRepository as Repository } from '@/features/product/domain/repositories'

export class GetAllUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(): Promise<Entity[] | null > {
        const entities: Entity[] | null = await this._repository.getAll()
        return entities
    }
}
