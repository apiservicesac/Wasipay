import { OrderEntity as Entity } from "@/features/order/domain/entities"
import { OrderRepository as Repository } from "@/features/order/domain/repositories"
import { CreateEntityException } from "@/shared/exceptions"

export class CreateUseCase {

    private readonly _order_repository: Repository

    constructor(
        order_repository: Repository,
    ) {
        this._order_repository = order_repository
    }

    async run(order: Entity): Promise<Entity> {    
        const orderEntity: Entity | null = await this._order_repository.save(order)
        if(orderEntity === null) throw new CreateEntityException("Error al crear la orden.")
        return orderEntity
    }

}
