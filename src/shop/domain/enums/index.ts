export enum ProductType {
    SINGLE = 'SINGLE',
    UNIT = 'UNIT',
    BOX = 'BOX',
}

export enum ProductState {
    AVAILABLE = 'AVAILABLE',
    SOLD_OUT = 'SOLD_OUT',
    OUT_OF_STOCK = 'OUT_OF_STOCK',
}

export enum ProductVisibility {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
    SCHEDULED = 'SCHEDULED',
    HIDDEN = 'HIDDEN',
}

export enum ProductTax {
    DRAFT = 'INCLUDE_PRICE',
    PUBLISHED = 'NOT_INCLUDE_PRICE',
}

export enum OrderStatus {
    PENDING = 'PENDING',    
    PROCESSING = 'PROCESSING',
    NEW = 'NEW',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED'
}