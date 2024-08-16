import { ImplementationAxios as AxiosAddress } from "@/features/address/infrastructure/implementation/axios/address";
import { CreateUseCase as CreateAddress } from "@/features/address/application/use_cases"
import { AddressEntity } from "@/features/address/domain/entities";
import { toast } from "sonner";

class QueryAddress {

    constructor() {
    }

    async create(values: any): Promise<AddressEntity | null> {
        try {
            const addressRepository = new AxiosAddress()
            const createAddress = new CreateAddress(addressRepository);
            const newAddress : AddressEntity = {                    
                ...values,
            }
            const address = await createAddress.run(newAddress);
            return address as AddressEntity;
        }
        catch {
            toast.error("Error al crear la direccion de entrega.")
            return null;
        }
    }

}

export { QueryAddress };
