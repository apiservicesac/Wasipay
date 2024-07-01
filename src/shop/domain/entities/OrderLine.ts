import { ProductEntity } from "./Product";

export interface OrderLineEntity {
    id?: string;
    order_id?: string;
    product_id?: string | ProductEntity;
    quantity?: number;
    unit_price?: number;
    total_price?: number;
    createdAt?: Date;
    updatedAt?: Date;
}