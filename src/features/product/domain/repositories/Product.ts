import { ProductEntity as Entity } from '../entities'

export interface ProductRepository {
    getAll: (shop_id: string, page: number, sortby: string, sortorder: string, search: string) => Promise<any>
    getById: (product_id: string) => Promise<Entity | null>
    getNextCode: (shop_id: string) => Promise<string | null>

    save: (shop_id: string, entity: Entity) => Promise<Entity | null>
    update: (product_id: string, entity: Entity) => Promise<Entity | null>
    update_field: (product_id : string, field : string, value : any) => Promise<Entity | null>
    update_images: (product_id : string, formData: FormData) => Promise<Entity | null>

    delete: (product_id: string) => Promise<void | null>
}
