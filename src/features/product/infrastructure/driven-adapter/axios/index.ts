import { ProductEntity as Entity, ProductResponse } from '@/features/product/domain/entities';
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

  async getAll(shop_id: string, page: number, sortby: string, sortorder: string, search: string): Promise<CustomReponse<ProductResponse>> {
    try {
      const response: CustomReponse<ProductResponse> = await this._axios.get(`/product/get-all/${shop_id}`, {
        params: {
          page: page,
          sortby: sortby,
          sortorder: sortorder,
          search: search
        }
      });
      return response;
    } catch (error) {
      console.error('Error al obtener los productos:', error);
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