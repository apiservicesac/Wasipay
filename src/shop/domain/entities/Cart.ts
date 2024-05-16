import { ProductEntity } from "./Product";

export interface ProductCartEntity {
    product?: ProductEntity;
    quantity?: number;
    total_price?: number;
    in_cart?: boolean;
}

export interface CartEntity {
    products?: ProductCartEntity[];
    subtotal_price?: number;
    total_price?: number;
}