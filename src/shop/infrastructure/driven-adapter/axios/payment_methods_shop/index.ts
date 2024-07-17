import { AddressEntity as Entity } from '@/shop/domain/entities';
import { CustomReponse } from '@/shared/entities/Response';
import { AxiosConfig } from '@/shared/services/axios';

class PaymentMethodShopAdapter {
  private _axios: AxiosConfig;

  constructor(baseUrl: string) {
    this._axios = new AxiosConfig(baseUrl);
    this._axios.setHeaders({
      "Content-Type": "application/json"
    });
  }
  
  async create(shop_id: string, formData: FormData): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/payment-method-shop/create/${shop_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      console.error('Error al crear el metodo de pago:', error);
      throw error;
    }
  }

  async update(id: string, formData: FormData): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.put(`/payment-method-shop/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      console.error('Error al crear el metodo de pago:', error);
      throw error;
    }
  }

  async update_field(id: string, data: any): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.patch(`/payment-method-shop/update-field/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear el metodo de pago:', error);
      throw error;
    }
  }

  async delete(shop_id: string, id: string): Promise<CustomReponse<null>> {
    try {
      const response : CustomReponse<null> = await this._axios.delete(`/payment-method-shop/delete/${shop_id}/${id}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar el metodo de pago:', error);
      throw error;
    }
  }
}

const base_url : string = `${import.meta.env.VITE_API_URL}`;
const PaymentMethodShopAxios = new PaymentMethodShopAdapter(base_url);

export {
  PaymentMethodShopAxios
};