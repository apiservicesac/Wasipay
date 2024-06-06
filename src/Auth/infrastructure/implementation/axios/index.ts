import { UserEntity as Entity, UserEntity, UserResponse } from "@/Auth/domain/entities";
import { UserRepository as Repository } from "@/Auth/domain/repositories";
import { UserAxios as Axios } from '@/Auth/infrastructure/driven-adapter/axios'
import { CustomReponse } from "@/shared/entities/Response";

class ImplementationAxios implements Repository {

    async login(email: string, password: string): Promise<CustomReponse<UserResponse<UserEntity>> | null> {
        return await Axios.login(email, password);        
    }
    
    async save (_data: Entity): Promise<CustomReponse<Entity> | null> {
        try{
            const body : Entity = {
                ..._data
            }
            return await Axios.create(body);            
        }catch {
            return null
        }
    }   

    async update(product_id: string, _data: Entity): Promise<CustomReponse<Entity> | null> {
        try{
            return await Axios.update(product_id, _data);
        }catch {
            return null
        }
    }  
    
    async update_field(id: string, field: string, value: any): Promise<CustomReponse<Entity> | null> {
        try{
            return await Axios.update_field(id, {field, value});
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

    async getById(id: string): Promise<CustomReponse<Entity> | null> {
        return await Axios.getById(id);
    }
    
}

export {
    ImplementationAxios
}