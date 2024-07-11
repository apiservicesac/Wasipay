import { CustomReponse } from "@/shared/entities/Response";
import { ShopEntity as Entity } from "@/shop/domain/entities";
import { ShopRepository as Repository } from "@/shop/domain/repositories";
import { ShopAxios as Axios } from '@/shop/infrastructure/driven-adapter/axios/shop'

class ImplementationAxios implements Repository {

    async getAll(): Promise<Entity[]> {
        const response: CustomReponse<Entity[]>  =  await Axios.getAll();
        return response.data as Entity[]
    }
    
    async save (_data: Entity): Promise<Entity | null> {
        try{
            const body : Entity = {
                ..._data
            }
            const response: CustomReponse<Entity>  =  await Axios.create(body);
            return response.data as Entity
        }catch {
            return null
        }
    }   

    async update(shop_id: string, _data: Entity): Promise<Entity | null> {
        try{
            const response: CustomReponse<Entity> = await Axios.update(shop_id, _data);
            return response.data as Entity
        }catch {
            return null
        }
    }  
    
    async update_field(id: string, field: string, value: any): Promise<Entity | null> {
        try{
            const response: CustomReponse<Entity> = await Axios.update_field(id, {field, value});
            return response.data as Entity
        }catch {
            return null
        }
    }
    
    async update_image(shop_id : string, formData: FormData): Promise<Entity | null> {        
        try{
            const response: CustomReponse<Entity> = await Axios.update_image(shop_id, formData);
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

        try{
            const response: CustomReponse<Entity> = await Axios.getById(id);
            return response.data as Entity
        }catch {
            return null
        }
    }
    
}

export {
    ImplementationAxios
}