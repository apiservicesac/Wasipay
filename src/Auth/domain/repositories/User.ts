import { UserEntity as Entity, AuthResponse } from '../entities'

export interface UserRepository {
    login: (email: string, password: string) => Promise<AuthResponse | null>
    
    save: (entity: Entity, accessToken: string) => Promise<Entity | null>

    getById: (id: string, accessToken: string) => Promise<Entity  | null>
    
    update: (id : string, entity: Entity, accessToken: string) => Promise<Entity | null>
    update_field: (id : string, field : string, value : any, accessToken: string) => Promise<Entity | null>
    
    delete: (id: string, accessToken: string) => Promise<void | null>
}
