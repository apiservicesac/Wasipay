import { ImplementationAxios } from "@/features/payment_method_shop/infrastructure/implementation/axios";
import { CreateUseCase, DeleteUseCase, UpdateUseCase } from '@/features/payment_method_shop/application/use_cases';
import { PaymentMethodShopEntity as Entity } from "@/features/payment_method_shop/domain/entities";

class QueryPaymentMethodShop {
    private shop_id = `${import.meta.env.VITE_SHOP_ID}`
    private repository: ImplementationAxios;

    constructor() {
        this.repository = new ImplementationAxios()
    }
    
    async created(data: Entity): Promise<void> {
        const createUseCase = new CreateUseCase(this.repository)                
        await createUseCase.run(this.shop_id, data)                
    }

    async updated(id:string, data: Entity): Promise<void> {        
        const updateUseCase = new UpdateUseCase(this.repository)
        await updateUseCase.run(id, data) 
    }

    async deleted(id:string): Promise<void> {
        const deleteUseCase = new DeleteUseCase(this.repository)
        await deleteUseCase.run(this.shop_id, id) 
    }

}

export {
    QueryPaymentMethodShop
};
