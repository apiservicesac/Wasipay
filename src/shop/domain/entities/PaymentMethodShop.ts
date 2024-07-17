import { CurrencyType } from "../enums";
import { PaymentMethodEntity } from "./PaymentMethod";

export interface PaymentMethodShopEntity {
    id?: string;
    payment_method?: string | PaymentMethodEntity;
    account_number?: string;
    interbank_account_number?: string;
    currency_type?: CurrencyType;
    image?: any;
    createdAt?: Date;
    updatedAt?: Date;
}
