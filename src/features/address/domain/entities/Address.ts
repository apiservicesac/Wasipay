export interface AddressEntity {
    id?: string;
    first_name?: string;
    last_name?: string,
    phone_number?: string,
    email?: string;    
    street?: string;
    city?: string;
    state?: string;
    postal_code?: string;
    country?: string;
    createdAt?: Date;
    updatedAt?: Date;
}