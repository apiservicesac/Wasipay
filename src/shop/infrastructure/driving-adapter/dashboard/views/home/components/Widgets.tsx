import React from 'react';
import { Package, Truck, View, Wallet2 } from 'lucide-react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { OrderEntity, ProductItemEntity } from '@/shop/domain/entities';

const Widgets = () => {
    const queryClient =  useQueryClient()
    const products : ProductItemEntity[] | undefined = queryClient.getQueryData(['query_product_list'])
    const orders : OrderEntity[] | undefined = queryClient.getQueryData(['query_order_list'])
    const amount_orders_total : any = orders?.flatMap((order) => order.total_amount).reduce((acc: any, current: any) => acc + current, 0);

    return (
        <React.Fragment>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 cursor-pointer order-2 2xl:order-3">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-custom-100 text-custom-500 dark:bg-custom-500/20">
                        <Wallet2 />
                    </div>
                    <h5 className="mt-4 mb-2">S/.
                        <CountUp end={amount_orders_total} decimals={2} className="counter-value" />
                    </h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Revenue</p>
                </div>
            </div>
            <Link to={'/dashboard/order'} className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 cursor-pointer order-2 2xl:order-3">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-purple-500 bg-purple-100 rounded-full size-14 dark:bg-purple-500/20">                        
                        <Truck />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={orders?.length!} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">My Orders</p>
                </div>
            </Link>
            <Link to={'/dashboard/product'} className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 cursor-pointer order-2 2xl:order-3">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-green-500 bg-green-100 rounded-full size-14 dark:bg-green-500/20">
                        <Package />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={products?.length!} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">My Products</p>
                </div>
            </Link>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2 cursor-pointer order-2 2xl:order-3">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-red-500 bg-red-100 rounded-full size-14 dark:bg-red-500/20">
                        <View />
                    </div>
                    <h5 className="mt-4 mb-2">
                        -
                        {/* <CountUp end={0} className="counter-value" /> */}
                    </h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Views</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Widgets;
