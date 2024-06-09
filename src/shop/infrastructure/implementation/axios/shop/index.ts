import { ShopEntity as Entity } from "@/shop/domain/entities";
import { ShopRepository as Repository } from "@/shop/domain/repositories";
import { ShopAxios as Axios } from '@/shop/infrastructure/driven-adapter/axios/shop'

class ImplementationAxios implements Repository {

    async getAll(): Promise<Entity[]> {
        const { data }: { data: Entity[] } = await Axios.getAll();
        return data;
    }
    
    async save (_data: Entity): Promise<Entity | null> {
        try{
            const body : Entity = {
                ..._data
            }
            const { data } : { data: Entity } = await Axios.create(body);
            return data
        }catch {
            return null
        }
    }   

    async update(shop_id: string, _data: Entity): Promise<Entity | null> {
        try{
            const { data } : { data: Entity } = await Axios.update(shop_id, _data);
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
    
    async update_image(shop_id : string, formData: FormData): Promise<Entity | null> {        
        try{
            const { data } : { data: Entity } = await Axios.update_image(shop_id, formData);
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
    
}

export {
    ImplementationAxios
}