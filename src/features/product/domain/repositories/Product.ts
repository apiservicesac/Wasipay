import { ProductEntity as Entity } from '../entities'

export interface ProductRepository {
    getAll: (shop_id: string, page: number, sortby: string, sortorder: string, search: string) => Promise<any>
    getById: (product_id: string) => Promise<Entity | null>
}
