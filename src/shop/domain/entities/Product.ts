import { ProductState, ProductTax, ProductType, ProductVisibility } from "../enums";

export interface ProductEntity {
    id?: string;
    name?: string;
    code_product?: string; 
    description?: string;
    price?: number;
    discount?: number;
    quantity?: number;
    sku?: string;
    brand?: string;
    product_category?: string;
    product_type?: ProductType;
    product_tax?: ProductTax,
    tags?: string[],
    publish_date_time: Date,
    shop_id?: string;
    images?: any[];
    status?: ProductState;
    visibility?: ProductVisibility;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ProductItemEntity {
    product?: ProductEntity;
    quantity?: number;
    total_price?: number;
    in_cart?: boolean;
}