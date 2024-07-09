import { AddressEntity as Entity } from '@/shop/domain/entities';
import { CustomReponse } from '@/shared/entities/Response';
import { AxiosConfig } from '@/shared/services/axios';

class AddressAdapter {
  private _axios: AxiosConfig;

  constructor(baseUrl: string) {
    this._axios = new AxiosConfig(baseUrl);
    this._axios.setHeaders({
      "Content-Type": "application/json"
    });
  }

  async getAll(shop_id: string): Promise<CustomReponse<Entity[]>> {
    try {
      const response : CustomReponse<Entity[]> = await this._axios.get(`/address/get-all/${shop_id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener las direcciones:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.get(`/address/get-by-id/${id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener la direccion por ID:', error);
      throw error;
    }
  }
  
  async create(data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/address/create`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la direccion:', error);
      throw error;
    }
  }

  async update(id: string, data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.put(`/address/update/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la direccion:', error);
      throw error;
    }
  }

  async update_field(id: string, data: any): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.patch(`/address/update-field/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la direccion:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<CustomReponse<null>> {
    try {
      const response : CustomReponse<null> = await this._axios.delete(`/address/delete/${id}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar la direccion:', error);
      throw error;
    }
  }
}

const base_url : string = `${import.meta.env.VITE_API_URL}`;
const AddressAxios = new AddressAdapter(base_url);

export {
  AddressAxios
};