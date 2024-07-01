import { AddressEntity as Entity } from '@/shop/domain/entities'
import { AddressRepository as Repository } from '@/shop/domain/repositories'

export class GetAllUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(customer_id: string): Promise<Entity[] | null > {
        const entities: Entity[] | null = await this._repository.getAll(customer_id)
        return entities
    }
}
