import { QueryClient } from '@tanstack/react-query';
import { ImplementationAxios as AxiosOrder } from "@/features/order/infrastructure/implementation/axios";
import { GetAllUseCase as OrderUseCaseGetAll, CreateUseCase as CreateOrder, GetNextCodeUseCase as GetNextCodeOrder} from "@/features/order/application/use_cases/order";
import { useQuery } from "@tanstack/react-query";
import { OrderEntity } from '@/features/order/domain/entities';

class QueryOrder {
    private shop_id = `${import.meta.env.VITE_SHOP_ID}`
    private queryClient: QueryClient;

    constructor(queryClient: QueryClient) {
        this.queryClient = queryClient;
    }

    async init(): Promise<void> {
        const orderRepository = new AxiosOrder();
        const orderUseCase = new OrderUseCaseGetAll(orderRepository);

        useQuery({
            queryKey: ['query_order_list'],
            queryFn: () => orderUseCase.run(this.shop_id),
            refetchOnMount: false,
        });
    }

    getAll(): OrderEntity[] {
        const orders = this.queryClient.getQueryData(['query_order_list']);
        return orders as OrderEntity[]
    }

    countAmmountTotal(): number {
        const orders = this.getAll();
        const amount_orders_total : number = orders?.flatMap((order) => order.total_amount).reduce((acc: any, current: any) => acc + current, 0);
        return amount_orders_total
    }    

    async create(new_order: OrderEntity): Promise<void> {
        const shop_id = `${import.meta.env.VITE_SHOP_ID}`
                
        const orderRepository = new AxiosOrder()
        const getNextCode = new GetNextCodeOrder(orderRepository)   
        const order_code = await getNextCode.run(shop_id)
        const newOrder: OrderEntity = {
            order_code,
            shop_id: shop_id,
            ...new_order
        }
        const createOrder = new CreateOrder(orderRepository)
        const response = await createOrder.run(newOrder)
        this.queryClient.cancelQueries({ queryKey: ['query_order_list'] })
        this.queryClient.setQueryData(['query_order_list'], [response, ...this.getAll()!])
    }
}

export { QueryOrder };
