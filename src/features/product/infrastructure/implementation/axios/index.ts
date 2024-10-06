import { CustomReponse } from "@/shared/entities/Response";
import { ProductEntity as Entity } from "@/features/product/domain/entities";
import { ProductRepository as Repository } from "@/features/product/domain/repositories";
import { ProductAxios as Axios } from "@/features/product/infrastructure/driven-adapter/axios"
import { ProductResponse } from '@/features/product/domain/entities'

class ImplementationAxios implements Repository {

    async getAll(shop_id: string, page: number, sortby: string, sortorder: string, search: string): Promise<ProductResponse> {
        const { data }: { data?: ProductResponse } = await Axios.getAll(shop_id, page, sortby, sortorder, search);
        return data!
    }
    
    async getById(id: string): Promise<Entity | null> {
        const response : CustomReponse<Entity> = await Axios.getById(id);
    
        if (!response.data) return null;
    
        return response.data as Entity
    }
}

export {
    ImplementationAxios
}