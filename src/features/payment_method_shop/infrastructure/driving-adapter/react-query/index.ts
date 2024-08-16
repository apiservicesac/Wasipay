import { ImplementationAxios } from "@/features/payment_method_shop/infrastructure/implementation/axios";
import { CreateUseCase, DeleteUseCase, UpdateUseCase } from '@/features/payment_method_shop/application/use_cases';

class QueryPaymentMethodShop {
    private shop_id = `${import.meta.env.VITE_SHOP_ID}`
    private repository: ImplementationAxios;

    constructor() {
        this.repository = new ImplementationAxios()
    }
    
    async created(formData: FormData): Promise<void> {
        const createUseCase = new CreateUseCase(this.repository)                
        await createUseCase.run(this.shop_id, formData)                
    }

    async updated(id:string, formData: FormData): Promise<void> {
        formData.append("shop_id", this.shop_id)
        const updateUseCase = new UpdateUseCase(this.repository)
        await updateUseCase.run(id, formData) 
    }

    async deleted(id:string): Promise<void> {
        const deleteUseCase = new DeleteUseCase(this.repository)
        await deleteUseCase.run(this.shop_id, id) 
    }

}

export {
    QueryPaymentMethodShop
};
