import { PaymentMethodEntity } from "@/features/payment_method/domain/entities";
import { CurrencyType } from "../enums";

export interface PaymentMethodShopEntity {
    id?: string;
    payment_method?: string | PaymentMethodEntity;
    account_number?: string;
    interbank_account_number?: string;
    currency_type?: CurrencyType;    
    createdAt?: Date;
    updatedAt?: Date;
}
