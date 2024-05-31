import { ProductState, ProductType, ProductVisibility } from "../enums";

export interface ProductEntity {
    _id?: string;
    name?: string;  
    description?: string;
    price?: number;
    discount?: number;
    quantity?: number;
    sku?: string;
    brand?: string;
    product_category?: string;
    product_type?: ProductType;
    shop?: string;
    file?: any[];
    status?: ProductState;
    visibility?: ProductVisibility;
    createdAt?: Date;
    updatedAt?: Date;
}