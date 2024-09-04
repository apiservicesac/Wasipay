import { ProductEntity as Entity } from '../entities'

export interface ProductRepository {
    getAll: () => Promise<Entity[]>
    getById: (product_id: string) => Promise<Entity | null>
}
