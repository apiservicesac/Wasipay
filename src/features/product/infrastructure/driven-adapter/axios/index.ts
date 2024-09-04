import { ProductEntity as Entity } from '@/features/product/domain/entities';
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

  async getAll(): Promise<CustomReponse<Entity[]>> {
    try {
      const response : CustomReponse<Entity[]> = await this._axios.get(`/product/get-all`);
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
      console.error('Error al obtener el producto por ID:', error);
      throw error;
    }
  }

}

const base_url : string = `${import.meta.env.VITE_API_URL}`;
const ProductAxios = new ProductAdapter(base_url);

export {
  ProductAxios
};