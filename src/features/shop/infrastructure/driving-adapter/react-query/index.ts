import { ImplementationAxios as AxiosShop } from "@/features/shop/infrastructure/implementation/axios";
import { ShopEntity } from '@/features/shop/domain/entities';
import { GetAllUseCase, GetByIdUseCase } from '@/features/shop/application/use_cases';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { AppDispatch } from '@/core/redux/store';
// import { setShops } from '@/core/redux/features/shopSlice';


class QueryShop {
    private shop_id = `${import.meta.env.VITE_SHOP_ID}`
    private repository: AxiosShop;
    private dispatch : AppDispatch


    constructor() {
        this.repository = new AxiosShop()
        this.dispatch = useAppDispatch()        
    }

    async init(): Promise<void> {
        const shop_use_case = new GetByIdUseCase(this.repository)   
        const response = await shop_use_case.run(this.shop_id);
        // this.dispatch(setShopProfile(response as ShopEntity))
    }

    getShop(): ShopEntity {
        const shop = useAppSelector((state) => state.shopReducer.shop_profile)
        return shop as ShopEntity    
    }


    async getAll(): Promise<void> {
        const shop_use_case = new GetAllUseCase(this.repository)   
        const response = await shop_use_case.run()
        // this.dispatch(setShops(response as ShopEntity[]))
    }

    getShops(): ShopEntity[] {
        const shops = useAppSelector((state) => state.shopReducer.shops)
        return shops as ShopEntity[]   
    }

    getByIdShop(id: string): ShopEntity | undefined {
        const shops = useAppSelector((state) => state.shopReducer.shops)
        return shops?.find((shop: ShopEntity) => shop.id === id);
    }    

}

export {
    QueryShop
};
