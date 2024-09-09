import { useQuery } from "@tanstack/react-query";
import { ImplementationAxios as AxiosShop } from "@/features/shop/infrastructure/implementation/axios";
import { GetAllUseCase } from '@/features/shop/application/use_cases';
import { useAppDispatch } from "@/core/redux/hooks";
import { setShops } from "@/core/redux/features/shopSlice";
import { ShopEntity } from "@/features/shop/domain/entities";

const useFetchShops = () => {
    
    const dispatch = useAppDispatch()

    const repository = new AxiosShop()
    const use_case = new GetAllUseCase(repository)   

    return useQuery({
        queryKey: ['query_shop_list'],
        queryFn: async () => {
            const response = await use_case.run();
            dispatch(setShops(response as ShopEntity[]));
            return response;
        },
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
};

export default useFetchShops;
