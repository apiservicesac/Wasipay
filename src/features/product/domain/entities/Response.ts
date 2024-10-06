import { ProductEntity } from "../entities";

export interface ProductResponse {
    products: ProductEntity[];
    total: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
}