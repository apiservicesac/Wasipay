import { ProductItemEntity } from "./Product";

export interface CartEntity {
    products?: ProductItemEntity[];
    subtotal_price?: number;
    total_tax?: number;
    total_price?: number;
}