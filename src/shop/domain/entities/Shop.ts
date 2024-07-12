import { PaymentMethodEntity } from "./PaymentMethod";

export interface ShopEntity {
    id?: string;
    name?: string;
    description?: string;
    address?: string;
    city?: string;
    country?: string;
    email?: string;
    phone?: string;
    image?: any;
    payment_method?: string[] | PaymentMethodEntity[];
    social_media?: {
        facebook?: string;
        tiktok?: string;
        instagram?: string;
        // youtube?: string;
        whatsapp?: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}