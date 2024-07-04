import { AddressEntity, ShopEntity } from "@/shop/domain/entities";
import { UserRole } from "../enums";

export interface UserEntity {
    id?: string;
    first_name?: string;
    last_name?: string;
    phone_number?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    shop?: ShopEntity;
    address?: AddressEntity;
    createdAt?: Date;
    updatedAt?: Date;

}