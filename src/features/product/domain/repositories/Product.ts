import { ProductEntity as Entity } from '../entities'

export interface ProductRepository {
    getAll: (shop_id: string, page: number) => Promise<any>
    getById: (product_id: string) => Promise<Entity | null>
}
