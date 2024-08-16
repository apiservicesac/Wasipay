import { PaymentMethodEntity } from "@/features/payment_method/domain/entities";

export interface OrderPaymentEntity {
    _id?: string;
    payment_method?: string | PaymentMethodEntity;
    image?: any;    
    createdAt?: Date;
    updatedAt?: Date;
}
