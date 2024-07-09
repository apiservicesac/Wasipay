import { OrderEntity } from "@/shop/domain/entities"
import { OrderRepository } from "@/shop/domain/repositories"
import { CreateEntityException } from "@/shared/exceptions"

export class CreateUseCase {

    private readonly _order_repository: OrderRepository

    constructor(
        order_repository: OrderRepository,
    ) {
        this._order_repository = order_repository
    }

    async run(order: OrderEntity): Promise<OrderEntity> {

        const orderEntity: OrderEntity | null = await this._order_repository.save(order)
        if(orderEntity === null) throw new CreateEntityException("Error al crear la orden.")
        return orderEntity
    }

}
