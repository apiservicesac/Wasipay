import { ProductEntity as Entity } from '../entities'

export interface ProductRepository {
    getAll: (shop_id: string) => Promise<Entity[]>
    getById: (product_id: string) => Promise<Entity | null>
    save: (shop_id: string, entity: Entity) => Promise<Entity | null>
    update: (product_id: string, entity: Entity) => Promise<Entity | null>
    update_field: (product_id : string, field : string, value : any) => Promise<Entity | null>
    delete: (product_id: string) => Promise<void | null>
}
