import { OrderEntity as Entity } from "@/shop/domain/entities";
import { OrderRepository as Repository } from "@/shop/domain/repositories";
import { OrderAxios as Axios } from '@/shop/infrastructure/driven-adapter/axios/order'

class ImplementationAxios implements Repository {

    async getAll(shop_id: string): Promise<Entity[]> {
        const { data }: { data: Entity[] } = await Axios.getAll(shop_id);
        return data;
    }
    
    async save (_data: Entity): Promise<Entity | null> {
        try{
            const body : Entity = {
                ..._data
            }
            const { data } : { data: Entity } = await Axios.create(body._id!, body);
            return data
        }catch {
            return null
        }
    }   

    async update(id: string, _data: Entity): Promise<Entity | null> {
        try{
            const { data } : { data: Entity } = await Axios.update(id, _data);
            return data
        }catch {
            return null
        }
    }  
    
    async update_field(id: string, field: string, value: any): Promise<Entity | null> {
        try{
            const { data } : { data: Entity } = await Axios.update_field(id, {field, value});
            return data
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
        const { data } : { data: Entity } = await Axios.getById(id);
    
        if (!data) return null;
    
        return data
    }
    
    async getNextCode(shop_id: string): Promise<string | null> {
        const { data }: { data: string } = await Axios.getNextCode(shop_id);
    
        if (!data) return null;
    
        return data
    }
    
}

export {
    ImplementationAxios
}