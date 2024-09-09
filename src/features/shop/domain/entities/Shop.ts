
export interface ShopEntity {
    id?: string;
    name?: string;
    description?: string;   
    image?: any;
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