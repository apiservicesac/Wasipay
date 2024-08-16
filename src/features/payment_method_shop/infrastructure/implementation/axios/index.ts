import { CustomReponse } from "@/shared/entities/Response";
import { PaymentMethodShopEntity as Entity } from "@/features/payment_method_shop/domain/entities";
import { PaymentMethodShopRepository as Repository } from "@/features/payment_method_shop/domain/repositories";
import { PaymentMethodShopAxios as Axios } from '@/features/payment_method_shop/infrastructure/driven-adapter/axios'

class ImplementationAxios implements Repository {
    
    async save (shop_id: string, formData: FormData): Promise<Entity | null> {
        try{
            const response : CustomReponse<Entity> = await Axios.create(shop_id, formData);
            return response.data as Entity
        }catch {
            return null
        }
    }   

    async update(id: string, formData: FormData): Promise<Entity | null> {
        try{
            const response : CustomReponse<Entity> = await Axios.update(id, formData);
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

    async delete (shop_id: string, id: string) : Promise<void | null > {
        try {
            await Axios.delete(shop_id, id)
        }catch (e) {
            return null
        }
    }
    
}

export {
    ImplementationAxios
}