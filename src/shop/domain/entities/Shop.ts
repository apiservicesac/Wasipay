export interface ShopEntity {
    id?: string;
    name?: string;
    description?: string;
    address?: string;
    city?: string;
    country?: string;
    postal_code?: string;
    email?: string;
    phone?: string;
    image?: any;
    social_media?: {
        facebook?: string;
        tiktok?: string;
        instagram?: string;
        youtube?: string;
        whatsapp?: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}