import { UserEntity as Entity, UserEntity, UserResponse } from '@/Auth/domain/entities';
import { CustomReponse } from '@/shared/entities/Response';
import { AxiosConfig } from '@/shared/services/axios';

class UserAdapter {
  private _axios: AxiosConfig;

  constructor(baseUrl: string) {
    this._axios = new AxiosConfig(baseUrl);
    this._axios.setHeaders({
      "Content-Type": "application/json"
    });
  }

  async login(email: string, password: string): Promise<CustomReponse<UserResponse<UserEntity>> | null> {
    try {
      const response : CustomReponse<UserResponse<UserEntity>> = await this._axios.post(`/user/login`, {
        email, password
      });
      return response;
    } catch (error) {      
      return null
    }
  }

  async getById(id: string): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.get(`/user/get-by-id/${id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener usuario por ID:', error);
      throw error;
    }
  }

  async create(data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/user/create`, data);
      return response;
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
  }

  async update(id: string, data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.put(`/user/update/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error;
    }
  }

  async update_field(id: string, data: any): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.patch(`/user/update-field/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<CustomReponse<null>> {
    try {
      const response : CustomReponse<null> = await this._axios.delete(`/user/delete/${id}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      throw error;
    }
  }
}

const base_url : string = `${import.meta.env.VITE_API_URL}`;
const UserAxios = new UserAdapter(base_url);

export {
  UserAxios
};