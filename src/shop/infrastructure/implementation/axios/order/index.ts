import { CustomReponse } from "@/shared/entities/Response";
import { OrderEntity as Entity } from "@/shop/domain/entities";
import { OrderRepository as Repository } from "@/shop/domain/repositories";
import { OrderAxios as Axios } from '@/shop/infrastructure/driven-adapter/axios/order'

class ImplementationAxios implements Repository {

    async getAll(shop_id: string): Promise<Entity[]> {
        const response : CustomReponse<Entity[]> = await Axios.getAll(shop_id);
        return response.data as Entity[];
    }
    
    async save (_data: Entity): Promise<Entity | null> {
        try{
            const body : Entity = {
                ..._data
            }
            const response : CustomReponse<Entity> = await Axios.create(body.shop_id!, body);
            return response.data as Entity;
        }catch {
            return null
        }
    }   

    async update(id: string, _data: Entity): Promise<Entity | null> {
        try{
            const response : CustomReponse<Entity> = await Axios.update(id, _data);
            return response.data as Entity;
        }catch {
            return null
        }
    }  
    
    async update_field(id: string, field: string, value: any): Promise<Entity | null> {
        try{
            const response : CustomReponse<Entity> = await Axios.update_field(id, {field, value});
            return response.data as Entity;
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
    
        return response.data as Entity;
    }
    
    async getNextCode(shop_id: string): Promise<string | null> {
        const response : CustomReponse<string> = await Axios.getNextCode(shop_id);
    
        if (!response.data) return null;
    
        return response.data as string;
    }
    
}

export {
    ImplementationAxios
}