import React, { useState } from 'react';
import { Search, } from 'lucide-react';
import TableContainer from '@/common/TableContainer';
import { useQueryClient } from '@tanstack/react-query';
import { OrderEntity } from '@/shop/domain/entities';
import filterDataBySearch from '../../utils/filterDataBySearch';
import { ColumnsOrders } from '../../utils/TableColumnsOrders';


const ProductsOrders = () => {
    const queryClient =  useQueryClient()
    const orders : OrderEntity[] | undefined = queryClient.getQueryData(['query_order_list'])

    const [data, setData] = useState(orders);

    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['order_code', 'customer.first_name', 'payment.payment_method.payment_method.name', 'status'];
        filterDataBySearch(orders as OrderEntity[], search, keysToSearch, setData);
    };   

    return (
        <React.Fragment>
            <div className="col-span-12 card 2xl:col-span-12 order-4">
                <div className="card-body">
                    <div className="grid items-center grid-cols-1 gap-3 mb-5 2xl:grid-cols-12">
                        <div className="2xl:col-span-3">
                            <h6 className="text-15">Products Orders</h6>
                        </div>
                        <div className="2xl:col-span-3 2xl:col-start-10">
                            <div className="flex gap-3">
                                <div className="relative grow">
                                    <input type="text" className="pl-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for ..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                                    <Search className="inline-block size-4 absolute left-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"></Search>
                                </div>
                                <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><i className="align-baseline pr-1 ri-download-2-line"></i> Export</button>
                            </div>
                        </div>
                    </div>
                    <TableContainer
                        isPagination={true}
                        columns={(ColumnsOrders || [])}
                        data={(data || [])}
                        customPageSize={7}
                        divclassName="overflow-x-auto"
                        tableclassName="w-full whitespace-nowrap"
                        theadclassName="text-left bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                        thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500"
                        tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductsOrders;
