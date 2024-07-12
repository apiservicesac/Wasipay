import { PaymentMethodEntity } from "./PaymentMethod";

export interface OrderPaymentEntity {
    _id?: string;
    payment_method?: string | PaymentMethodEntity;
    image?: any;    
    createdAt?: Date;
    updatedAt?: Date;
}
