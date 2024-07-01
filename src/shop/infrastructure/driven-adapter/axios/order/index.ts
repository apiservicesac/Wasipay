import { OrderEntity as Entity } from '@/shop/domain/entities';
import { CustomReponse } from '@/shared/entities/Response';
import { AxiosConfig } from '@/shared/services/axios';

class OrderAdapter {
  private _axios: AxiosConfig;

  constructor(baseUrl: string) {
    this._axios = new AxiosConfig(baseUrl);
    this._axios.setHeaders({
      "Content-Type": "application/json"
    });
  }

  async getAll(shop_id: string): Promise<CustomReponse<Entity[]>> {
    try {
      const response : CustomReponse<Entity[]> = await this._axios.get(`/order/get-all/${shop_id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener las ordenes:', error);
      throw error;
    }
  }

  async getById(id: string): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.get(`/order/get-by-id/${id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener la orden por ID:', error);
      throw error;
    }
  }

  async getNextCode(shop_id: string): Promise<CustomReponse<string>> {
    try {
      const response : CustomReponse<string> = await this._axios.get(`/order/get-next-code/${shop_id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener la orden por ID:', error);
      throw error;
    }
  }

  async create(shop_id: string, data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/order/create/${shop_id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la orden:', error);
      throw error;
    }
  }

  async update(id: string, data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.put(`/order/update/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la orden:', error);
      throw error;
    }
  }

  async update_field(id: string, data: any): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.patch(`/order/update-field/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear la orden:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<CustomReponse<null>> {
    try {
      const response : CustomReponse<null> = await this._axios.delete(`/order/delete/${id}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar la aplicación:', error);
      throw error;
    }
  }
}

const base_url : string = `${import.meta.env.VITE_API_URL}`;
const OrderAxios = new OrderAdapter(base_url);

export {
  OrderAxios
};