import { ShopRepository as Repository } from "@/shop/domain/repositories"
import { DeleteEntityException } from "@/shared/exceptions"

export class DeleteUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(shop_id: string): Promise<void | null > {
       
        const deleted = await this._repository.delete(shop_id)

        if(deleted === null) throw new DeleteEntityException()

    }
}
