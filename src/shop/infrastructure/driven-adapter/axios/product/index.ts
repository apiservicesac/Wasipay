import { ProductEntity as Entity } from '@/shop/domain/entities';
import { CustomReponse } from '@/shared/entities/Response';
import { AxiosConfig } from '@/shared/services/axios';

class ProductAdapter {
  private _axios: AxiosConfig;

  constructor(baseUrl: string) {
    this._axios = new AxiosConfig(baseUrl);
    this._axios.setHeaders({
      "Content-Type": "application/json"
    });
  }

  async getAll(shop_id: string): Promise<CustomReponse<Entity[]>> {
    try {
      const response : CustomReponse<Entity[]> = await this._axios.get(`/product/get-all/${shop_id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener las aplicaciones:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.get(`/product/get-by-id/${id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener la aplicación por ID:', error);
      throw error;
    }
  }

  async create(shop_id: string, data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/product/create/${shop_id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la aplicación:', error);
      throw error;
    }
  }

  async update(product_id: string, data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.put(`/product/update/${product_id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la aplicación:', error);
      throw error;
    }
  }

  async update_field(id: string, data: any): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.patch(`/product/update-field/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la aplicación:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<CustomReponse<null>> {
    try {
      const response : CustomReponse<null> = await this._axios.delete(`/product/delete/${id}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar la aplicación:', error);
      throw error;
    }
  }
}

const base_url : string = `${import.meta.env.VITE_API_URL}`;
const ProductAxios = new ProductAdapter(base_url);

export {
  ProductAxios
};