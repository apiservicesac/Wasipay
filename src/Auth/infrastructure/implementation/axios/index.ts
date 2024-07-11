import { UserEntity as Entity, AuthResponse } from "@/Auth/domain/entities";
import { UserRepository as Repository } from "@/Auth/domain/repositories";
import { UserAxios as Axios } from '@/Auth/infrastructure/driven-adapter/axios'
import { CustomReponse } from "@/shared/entities/Response";

class ImplementationAxios implements Repository {


    async login(email: string, password: string): Promise<AuthResponse | null> {            
        try{
            const response: CustomReponse<AuthResponse>  =  await Axios.login(email, password);        
            return response.data as AuthResponse
        }catch {
            return null
        }
    }
    
    async save (_data: Entity, accessToken: string): Promise<Entity | null> {

        try{
            const body : Entity = {
                ..._data
            }
            const response: CustomReponse<Entity>  = await Axios.create(body, accessToken);
            return response.data as Entity 
        }catch {
            return null
        }
    }   

    async update(product_id: string, _data: Entity, accessToken: string): Promise<Entity | null> {
        try{
            const response: CustomReponse<Entity>  = await Axios.update(product_id, _data, accessToken);
            return response.data as Entity 
        }catch {
            return null
        }
    }  
    
    async update_field(id: string, field: string, value: any, accessToken: string): Promise<Entity | null> {
        try{
            const response: CustomReponse<Entity>  = await Axios.update_field(id, {field, value}, accessToken);
            return response.data as Entity
        }catch {
            return null
        }
    }  

    async delete (id: string, accessToken: string) : Promise<void | null > {
        try {
            await Axios.delete(id, accessToken)
        }catch (e) {
            return null
        }
    }

    async getById(id: string, accessToken: string): Promise<Entity | null> {    
        try {
            const response: CustomReponse<Entity>  = await Axios.getById(id, accessToken);
            return response.data as Entity 
        }catch (e) {
            return null
        }
    }
    
}

export {
    ImplementationAxios
}