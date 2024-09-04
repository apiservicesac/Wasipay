import { CustomReponse } from "@/shared/entities/Response";
import { ProductEntity as Entity } from "@/features/product/domain/entities";
import { ProductRepository as Repository } from "@/features/product/domain/repositories";
import { ProductAxios as Axios } from "@/features/product/infrastructure/driven-adapter/axios"

class ImplementationAxios implements Repository {

    async getAll(): Promise<Entity[]> {
        const { data }: { data?: Entity[] } = await Axios.getAll();
        return data!;
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