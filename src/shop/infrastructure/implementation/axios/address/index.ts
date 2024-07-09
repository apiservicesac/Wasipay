import { CustomReponse } from "@/shared/entities/Response";
import { AddressEntity as Entity } from "@/shop/domain/entities";
import { AddressRepository as Repository } from "@/shop/domain/repositories";
import { AddressAxios as Axios } from '@/shop/infrastructure/driven-adapter/axios/address'

class ImplementationAxios implements Repository {

    async getAll(shop_id: string): Promise<Entity[]> {
        try {
            const response : CustomReponse<Entity[]> = await Axios.getAll(shop_id);
            return response.data as Entity[];
        }catch(e) {
            return []
        }
        
    }
    
    async save (_data: Entity): Promise<Entity | null> {
        try{
            const body : Entity = {
                ..._data
            }
            const response : CustomReponse<Entity> = await Axios.create(body);
            return response.data as Entity
        }catch {
            return null
        }
    }   

    async update(id: string, _data: Entity): Promise<Entity | null> {
        try{
            const response : CustomReponse<Entity> = await Axios.update(id, _data);
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
    
}

export {
    ImplementationAxios
}