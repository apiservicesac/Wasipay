import { ShopEntity as Entity } from '@/features/shop/domain/entities';
import { CustomReponse } from '@/shared/entities/Response';
import { AxiosConfig } from '@/shared/services/axios';

class ShopAdapter {
  private _axios: AxiosConfig;

  constructor(baseUrl: string) {
    this._axios = new AxiosConfig(baseUrl);
    this._axios.setHeaders({
      "Content-Type": "application/json"
    });
  }

  async getAll(): Promise<CustomReponse<Entity[]>> {
    try {
      const response : CustomReponse<Entity[]> = await this._axios.get(`/shop/get-all`);
      return response;
    } catch (error) {
      console.error('Error al obtener las aplicaciones:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.get(`/shop/get-by-id/${id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener la aplicación por ID:', error);
      throw error;
    }
  }

  async create(data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/shop/create`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la aplicación:', error);
      throw error;
    }
  }

  async update(shop_id: string, data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.put(`/shop/update/${shop_id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la aplicación:', error);
      throw error;
    }
  }

  async update_field(id: string, data: any): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.patch(`/shop/update-field/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la aplicación:', error);
      throw error;
    }
  }

  async update_image(id: string, formData: FormData): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/shop/update-image/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      console.error('Error al crear la aplicación:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<CustomReponse<null>> {
    try {
      const response : CustomReponse<null> = await this._axios.delete(`/shop/delete/${id}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar la aplicación:', error);
      throw error;
    }
  }
}

const base_url : string = `${import.meta.env.VITE_API_URL}`;
const ShopAxios = new ShopAdapter(base_url);

export {
  ShopAxios
};