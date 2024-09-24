import { ProductEntity as Entity } from '@/features/product/domain/entities';
import { ProductResponse } from '@/features/product/domain/entities/Response';
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

  async getNextCode(shop_id: string): Promise<CustomReponse<string>> {
    try {
      const response : CustomReponse<string> = await this._axios.get(`/product/get-next-code/${shop_id}`);
      return response;
    } catch (error) {
      console.error('Error al obtener el producto por ID:', error);
      throw error;
    }
  }

  async create(shop_id: string, data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/product/create/${shop_id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  }

  async update(product_id: string, data: Entity): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.put(`/product/update/${product_id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  }

  async update_field(id: string, data: any): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.patch(`/product/update-field/${id}`, data);
      return response;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  }


  async update_images(id: string, formData: FormData): Promise<CustomReponse<Entity>> {
    try {
      const response : CustomReponse<Entity> = await this._axios.post(`/product/update-images/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  }

  async delete(id: string): Promise<CustomReponse<null>> {
    try {
      const response : CustomReponse<null> = await this._axios.delete(`/product/delete/${id}`);
      return response;
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      throw error;
    }
  }
}

const base_url : string = `${import.meta.env.VITE_API_URL}`;
const ProductAxios = new ProductAdapter(base_url);

export {
  ProductAxios
};