import { CustomReponse } from "@/shared/entities/Response";
import { ProductEntity as Entity } from "@/features/product/domain/entities";
import { ProductRepository as Repository } from "@/features/product/domain/repositories";
import { ProductAxios as Axios } from "@/features/product/infrastructure/driven-adapter/axios"
import { ProductResponse } from "@/features/product/domain/entities/Response";

class ImplementationAxios implements Repository {

    async getAll(shop_id: string, page: number, sortby: string, sortorder: string, search: string): Promise<ProductResponse> {
        const { data }: { data?: ProductResponse } = await Axios.getAll(shop_id, page, sortby, sortorder, search);
        return data as ProductResponse
    }
    
    async save (shop_id: string, _data: Entity): Promise<Entity | null> {
        try{
            const body : Entity = {
                ..._data
            }
            const response : CustomReponse<Entity> = await Axios.create(shop_id, body);
            return response.data as Entity
        }catch {
            return null
        }
    }   

    async update(product_id: string, _data: Entity): Promise<Entity | null> {
        try{
            const response : CustomReponse<Entity> = await Axios.update(product_id, _data);
            return response.data as Entity
        }catch {
            return null
        }
    }  
    
    async update_field(id: string, field: string, value: any): Promise<Entity | null> {
        try{
            const response : CustomReponse<Entity> = await Axios.update_field(id, {field, value});
            return response.data as Entity
        }catch {
            return null
        }
    }  

    async update_images(id : string, formData: FormData): Promise<Entity | null> {        
        try{
            const response : CustomReponse<Entity> = await Axios.update_images(id, formData);
            return response.data as Entity
        }catch {
            return null
        }
    }

    async delete (id: string) : Promise<void | null > {
        try {
            await Axios.delete(id)
        }catch (e) {
            return null
        }
    }

    async getById(id: string): Promise<Entity | null> {
        const response : CustomReponse<Entity> = await Axios.getById(id);
    
        if (!response.data) return null;
    
        return response.data as Entity
    }
    
    async getNextCode(shop_id: string): Promise<string | null> {
        const { data }: { data?: string } = await Axios.getNextCode(shop_id);
    
        if (!data) return null;
    
        return data
    }
    
}

export {
    ImplementationAxios
}