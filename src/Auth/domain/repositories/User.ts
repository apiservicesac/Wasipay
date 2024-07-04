import { CustomReponse } from '@/shared/entities/Response'
import { UserEntity as Entity, UserEntity, UserResponse } from '../entities'

export interface UserRepository {
    login: (email: string, password: string) => Promise<CustomReponse<UserResponse<UserEntity>> | null>
    getById: (id: string) => Promise<CustomReponse<Entity | null>>
    save: (entity: Entity) => Promise<CustomReponse<Entity> | null>
    update: (id : string, entity: Entity) => Promise<CustomReponse<Entity> | null>
    update_field: (id : string, field : string, value : any) => Promise<CustomReponse<Entity> | null>
    delete: (id: string) => Promise<void | null>
}
