import { AddressEntity } from "@/features/address/domain/entities";
import { UserRole } from "../enums";
import { ShopEntity } from "@/features/shop/domain/entities";

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